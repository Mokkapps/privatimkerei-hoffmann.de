<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

import { images } from '~/data/images'
import siteMetadata from '~/siteMetadata'

const sections = [
  { id: 'principles', label: 'Über uns' },
  { id: 'products', label: 'Produkte' },
  { id: 'knowledge', label: 'Wissenswertes' },
  { id: 'contact', label: 'Kontakt' },
] as const

const route = useRoute()
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const activeSection = computed(() => {
  if (route.path !== '/') {
    return undefined
  }
  return [...sections].reverse().find(section => activeHeadings.value.includes(section.id))?.id
})

const menuItems = computed<Array<DropdownMenuItem>>(() => [
  ...sections.map(section => ({ label: section.label, to: `/#${section.id}` })),
  { icon: 'i-heroicons-phone', label: `Anrufen: ${siteMetadata.phoneDisplay}`, to: siteMetadata.phoneHref },
])

const isScrolled = ref(false)

function onScroll () {
  isScrolled.value = window.scrollY > 8
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings(
    sections
      .map(section => document.querySelector(`#${section.id}`))
      .filter((element): element is Element => element !== null),
  )
})
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b bg-default/85 backdrop-blur-md backdrop-saturate-150 transition-colors"
    :class="isScrolled ? 'border-default' : 'border-transparent'"
  >
    <UContainer class="flex h-(--ui-header-height) items-center gap-3 sm:gap-7">
      <NuxtLink
        to="/"
        class="mr-auto flex min-w-0 items-center gap-2.5 sm:gap-3"
      >
        <NuxtImg
          :src="images.logo"
          alt=""
          width="84"
          height="84"
          class="size-9 shrink-0 rounded-full sm:size-10.5"
        />
        <span class="font-display text-[17px] leading-tight font-bold tracking-[-0.02em] whitespace-nowrap text-highlighted sm:text-[19px]">
          Privatimkerei Hoffmann
          <span class="hidden font-sans text-[13px] font-medium tracking-normal text-muted sm:block">
            Bayerischer Wald · seit {{ siteMetadata.foundingYear }}
          </span>
        </span>
      </NuxtLink>

      <nav
        aria-label="Hauptnavigation"
        class="hidden gap-1 lg:flex"
      >
        <NuxtLink
          v-for="section in sections"
          :key="section.id"
          :to="`/#${section.id}`"
          class="rounded-full px-3.5 py-2.5 text-base font-medium transition-colors hover:bg-muted hover:text-highlighted"
          :class="activeSection === section.id ? 'bg-muted text-highlighted' : 'text-muted'"
        >
          {{ section.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <UColorModeButton
          class="hidden sm:inline-flex"
          size="lg"
        />
        <UDropdownMenu
          :items="menuItems"
          :content="{ align: 'end' }"
          class="lg:hidden"
        >
          <UButton
            icon="i-heroicons-bars-3"
            color="neutral"
            variant="ghost"
            size="lg"
            aria-label="Menü öffnen"
          />
        </UDropdownMenu>
        <a
          :href="siteMetadata.phoneHref"
          class="btn btn-primary min-h-11 w-11 px-0 text-base min-[440px]:w-auto min-[440px]:px-4.5"
          :aria-label="`${siteMetadata.phoneDisplay} anrufen`"
        >
          <UIcon
            name="i-heroicons-phone"
            class="size-5"
          />
          <span class="hidden min-[440px]:inline sm:hidden">Anrufen</span>
          <span class="hidden sm:inline">{{ siteMetadata.phoneDisplay }}</span>
        </a>
      </div>
    </UContainer>
  </header>
</template>
