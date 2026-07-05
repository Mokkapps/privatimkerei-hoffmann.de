<script setup lang="ts">
import siteMetadata from '~/siteMetadata'

const value = await queryCollection('pages').path('/pages/privacy-policy').first()

useSeoMeta({
  description: 'Datenschutzerklärung der Privatimkerei Hoffmann – Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.',
  robots: 'noindex, follow',
  title: 'Datenschutzerklärung',
})

defineOgImageComponent('NuxtSeo', {
  description: 'Datenschutzerklärung',
  theme: '#B29712',
  title: siteMetadata.title,
})
</script>

<template>
  <UMain>
    <UContainer>
      <UPage>
        <UPageHeader title="Datenschutzerklärung" />
        <UPageBody prose>
          <ContentRenderer :value="value" />
        </UPageBody>
      </UPage>
    </UContainer>
  </UMain>
</template>
