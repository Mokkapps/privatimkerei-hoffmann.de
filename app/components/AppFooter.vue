<script setup lang="ts">
import siteMetadata from '~/siteMetadata'

const links = [
  { label: 'Impressum', to: '/impressum' },
  { label: 'Datenschutz', to: '/datenschutz' },
]
</script>

<template>
  <footer class="border-t border-white/10 bg-forest-800 text-[15px] text-forest-300 dark:bg-forest-900">
    <UContainer class="flex flex-wrap items-center justify-between gap-x-7 gap-y-4 py-7">
      <div class="grid gap-1">
        <p>Copyright © {{ new Date().getFullYear() }} {{ siteMetadata.title }}</p>
        <p>
          Seite erstellt von
          <NuxtLink
            to="https://mokkapps.de"
            external
            target="_blank"
            class="text-forest-100 underline underline-offset-4 hover:text-primary"
          >
            Michael Hoffmann
          </NuxtLink>
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-x-6 gap-y-2">
        <nav
          aria-label="Rechtliches"
          class="flex gap-6"
        >
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="text-forest-100 hover:underline hover:underline-offset-4"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
        <div class="flex items-center gap-1">
          <UButton
            icon="i-simple-icons-instagram"
            :to="siteMetadata.instagramUrl"
            target="_blank"
            color="neutral"
            variant="ghost"
            class="text-forest-100 hover:bg-white/10"
            aria-label="Privatimkerei Hoffmann auf Instagram"
          />
          <UColorModeButton class="text-forest-100 hover:bg-white/10" />
        </div>
      </div>
    </UContainer>
  </footer>
</template>
