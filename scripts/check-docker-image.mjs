import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { unlink, writeFile } from 'node:fs/promises'
import process from 'node:process'
import { setTimeout } from 'node:timers/promises'

// Execute inside the production container using node --input-type=module on stdin.
const base = `http://127.0.0.1:${process.env.PORT}`
assert.notEqual(process.getuid(), 0)
assert.equal(existsSync('/app/node_modules'), false)
await writeFile('/app/.data/docker-smoke', 'ok')
await unlink('/app/.data/docker-smoke')
for (let attempt = 0; ; attempt++) {
  try {
    const response = await fetch(base, {
      signal: AbortSignal.timeout(2000),
    })
    assert.equal(response.status, 200)
    break
  }
  catch (error) {
    if (attempt >= 59) {
      throw error
    }
    await setTimeout(1000)
  }
}
let homepage = ''
for (const path of JSON.parse(process.env.SMOKE_PATHS || '["/"]')) {
  const response = await fetch(base + path, {
    signal: AbortSignal.timeout(30000),
  })
  const body = await response.text()
  assert.equal(response.status, 200, path)
  assert.ok(body.length > 0, path)
  if (path === '/') {
    homepage = body
  }
  process.stdout.write(`PASS ${path}\n`)
}
assert.ok(homepage.toLowerCase().includes((process.env.EXPECTED_APP_TEXT || '').toLowerCase()))
const asset = homepage.match(/(?:src|href)="([^"]*\/_nuxt\/[^" ]+\.js[^"]*)"/)
assert.ok(asset, 'Nuxt client JavaScript must be present')
const assetUrl = new URL(asset[1].replaceAll('&amp;', '&'), base)
const assetResponse = await fetch(base + assetUrl.pathname + assetUrl.search)
assert.equal(assetResponse.status, 200, 'Nuxt JavaScript asset')
const image = homepage.match(/src="([^"]*\/_ipx\/[^" ]+)"/)
if (image) {
  const imageUrl = new URL(image[1].replaceAll('&amp;', '&'), base)
  const response = await fetch(base + imageUrl.pathname + imageUrl.search, {
    signal: AbortSignal.timeout(30000),
  })
  assert.equal(response.status, 200, 'IPX image')
  assert.match(response.headers.get('content-type') || '', /^image\//)
  process.stdout.write('PASS native IPX image rendering\n')
}
process.stdout.write('PASS non-root runtime, writable content data and client assets\n')
