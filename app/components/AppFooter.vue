<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

import siteMetadata from '~/siteMetadata'

const items: Array<NavigationMenuItem> = [{
  label: 'Impressum',
  to: '/impressum',
}, {
  label: 'Datenschutz',
  to: '/datenschutz',
}]
</script>

<template>
  <UFooter>
    <template #left>
      <span class="text-sm text-gray-500 dark:text-gray-400">
        <p>
          Copyright © {{ new Date().getFullYear() }} Privatimkerei Hoffmann.
        </p>
        <p>
          Seite erstellt von
          <NuxtLink
            to="https://mokkapps.de"
            external
            target="_blank"
            class="text-primary underline"
          >Michael Hoffmann</NuxtLink>.
        </p>
      </span>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />

    <template #right>
      <UButton
        icon="i-simple-icons-instagram"
        :to="siteMetadata.instagramUrl"
        target="_blank"
        color="neutral"
        variant="ghost"
        size="sm"
        aria-label="Privatimkerei Hoffmann auf Instagram"
      />
      <UColorModeButton size="sm" />
    </template>
  </UFooter>
</template>
