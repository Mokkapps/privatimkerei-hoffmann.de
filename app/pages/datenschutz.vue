<script setup lang="ts">
import siteMetadata from '~/siteMetadata'

const value = await queryCollection('pages').path('/pages/privacy-policy').first()

useSeoMeta({
  description: 'Datenschutzerklärung der Privatimkerei Hoffmann – Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.',
  robots: 'noindex, follow',
  title: 'Datenschutzerklärung',
})

defineOgImage('NuxtSeoSatori', {
  description: 'Datenschutzerklärung',
  title: siteMetadata.title,
})
</script>

<template>
  <UMain>
    <UContainer>
      <UPage>
        <UPageHeader title="Datenschutzerklärung" />
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
