<script setup lang="ts">
import siteMetadata from '~/siteMetadata'

const value = await queryCollection('pages').path('/pages/imprint').first()

useSeoMeta({
  description: 'Impressum der Privatimkerei Hoffmann – Angaben gemäß § 5 TMG, Kontakt und Haftungshinweise.',
  robots: 'noindex, follow',
  title: 'Impressum',
})

defineOgImage('NuxtSeoSatori', {
  description: 'Impressum',
  title: siteMetadata.title,
})
</script>

<template>
  <UMain>
    <UContainer>
      <UPage>
        <UPageHeader title="Impressum" />
        <UPageBody prose>
          <ContentRenderer
            v-if="value"
            :value="value"
          />
        </UPageBody>
      </UPage>
    </UContainer>
  </UMain>
</template>
