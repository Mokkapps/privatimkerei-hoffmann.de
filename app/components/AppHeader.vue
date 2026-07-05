<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

import siteMetadata from '~/siteMetadata'

const route = useRoute()
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const items = computed<Array<NavigationMenuItem>>(() => {
  if (route.path !== '/') {
    return []
  }

  return [{
    active: activeHeadings.value.includes('principles') && !activeHeadings.value.includes('products'),
    label: 'Grundsätze',
    to: '#principles',
  }, {
    active: activeHeadings.value.includes('products') && !activeHeadings.value.includes('knowledge'),
    label: 'Produkte',
    to: '#products',
  }, {
    active: activeHeadings.value.includes('knowledge') && !activeHeadings.value.includes('gallery'),
    label: 'Wissenswertes',
    to: '#knowledge',
  }, {
    active: activeHeadings.value.includes('gallery') && !activeHeadings.value.includes('contact'),
    label: 'Einblicke',
    to: '#gallery',
  }, {
    active: activeHeadings.value.includes('contact'),
    label: 'Kontakt',
    to: '#contact',
  }]
})

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#principles'),
    document.querySelector('#products'),
    document.querySelector('#knowledge'),
    document.querySelector('#gallery'),
    document.querySelector('#contact'),
  ])
})
</script>

<template>
  <UHeader>
    <template #title>
      <div class="flex items-center">
        <nuxt-img
          src="/logo.png"
          alt="Logo der Privatimkerei Hoffmann"
          class="w-12 h-12"
        />
        Privatimkerei Hoffmann
      </div>
    </template>

    <UNavigationMenu
      :items="items"
    />

    <template #right>
      <UButton
        icon="i-simple-icons-instagram"
        :to="siteMetadata.instagramUrl"
        target="_blank"
        color="neutral"
        variant="ghost"
        aria-label="Privatimkerei Hoffmann auf Instagram"
      />
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>
