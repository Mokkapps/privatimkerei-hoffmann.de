<script setup lang="ts">
import siteMetadata from '~/siteMetadata'

const facts = [
  {
    label: `Jahre Imkerei in der Familie, seit ${siteMetadata.foundingYear}`,
    value: String(new Date().getFullYear() - siteMetadata.foundingYear),
  },
  {
    label: 'Standorte in Prackenbach und Rattenberg',
    value: String(siteMetadata.locations.length),
  },
  { label: 'Medikamente, nur biologische Säuren', value: '0' },
  { label: 'Honig aus unserer Region, ohne Zusätze', value: '100 %' },
]
</script>

<template>
  <section
    aria-label="Auf einen Blick"
    class="border-y border-default"
  >
    <UContainer class="grid grid-cols-2 md:grid-cols-4">
      <div
        v-for="fact in facts"
        :key="fact.label"
        class="grid min-w-0 content-start gap-1 border-default px-3.5 py-6 not-first:border-l max-md:nth-3:border-l-0 max-md:nth-[n+3]:border-t sm:px-6 sm:py-7"
      >
        <span class="font-display text-[clamp(2rem,3.6vw,2.75rem)] leading-none font-extrabold tracking-[-0.03em] text-highlighted tabular-nums">{{ fact.value }}</span>
        <span class="text-base leading-snug text-muted">{{ fact.label }}</span>
      </div>
    </UContainer>
  </section>
</template>
