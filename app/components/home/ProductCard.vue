<script setup lang="ts">
import type { Product } from '~/data/products'
import { formatPrice } from '~/data/products'
import siteMetadata from '~/siteMetadata'

const props = defineProps<{
  product: Product
}>()

const selectedIndex = ref(0)
const hasVariantChoice = computed(() => props.product.variants.length > 1)
const selectedVariant = computed(() => props.product.variants[selectedIndex.value]!)

const priceCaption = computed(() => hasVariantChoice.value
  ? 'inkl. MwSt.'
  : `${selectedVariant.value.label}, inkl. MwSt.`)

const inquiryHref = computed(() => {
  const subject = hasVariantChoice.value
    ? `Anfrage: ${props.product.name} – ${selectedVariant.value.label}`
    : `Anfrage: ${props.product.name}`
  return `mailto:${siteMetadata.email}?subject=${encodeURIComponent(subject)}`
})
</script>

<template>
  <article class="group flex min-w-0 flex-col gap-5 rounded-3xl border border-default bg-surface p-3 pb-6">
    <div class="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted md:max-lg:group-last:aspect-[2/1]">
      <NuxtImg
        :src="product.image"
        :alt="product.imageAlt"
        loading="lazy"
        sizes="100vw md:50vw lg:400px"
        class="size-full object-cover"
      />
      <span
        v-if="product.badge"
        class="absolute top-3 left-3 rounded-full bg-surface px-3 py-1.5 text-sm font-semibold text-highlighted"
      >{{ product.badge }}</span>
    </div>

    <div class="flex flex-1 flex-col gap-3.5 px-3">
      <h3 class="text-[1.75rem] leading-tight font-bold text-highlighted">
        {{ product.name }}
      </h3>
      <p class="text-[17px] text-muted">
        {{ product.description }}
      </p>
      <ul class="grid gap-2 text-base">
        <li
          v-for="detail in product.details"
          :key="detail"
          class="grid grid-cols-[20px_1fr] items-start gap-2.5"
        >
          <UIcon
            name="i-heroicons-check-20-solid"
            class="mt-0.5 size-5 text-honey-ink"
          />
          <span>{{ detail }}</span>
        </li>
      </ul>

      <div
        v-if="hasVariantChoice"
        class="grid gap-2"
      >
        <span
          :id="`${product.id}-variant-label`"
          class="text-[15px] text-muted"
        >
          Größe: <strong class="font-semibold text-highlighted">{{ selectedVariant.label }}</strong>
        </span>
        <div
          role="group"
          :aria-labelledby="`${product.id}-variant-label`"
          class="grid auto-cols-fr grid-flow-col gap-1 rounded-xl bg-muted p-1"
        >
          <button
            v-for="(variant, index) in product.variants"
            :key="variant.label"
            type="button"
            :aria-pressed="index === selectedIndex"
            :aria-label="variant.label"
            class="min-h-11 rounded-lg px-1 py-2.5 text-[15px] font-semibold text-muted transition-colors hover:text-highlighted focus-visible:outline-3 focus-visible:outline-primary aria-pressed:bg-surface aria-pressed:text-highlighted aria-pressed:shadow-sm"
            @click="selectedIndex = index"
          >
            {{ variant.shortLabel ?? variant.label }}
          </button>
        </div>
      </div>

      <div class="mt-auto flex flex-wrap items-end justify-between gap-3 border-t border-default pt-4.5">
        <div>
          <p class="font-display text-[2.5rem] leading-none font-extrabold tracking-[-0.03em] text-highlighted tabular-nums">
            {{ formatPrice(selectedVariant.price) }}
          </p>
          <p class="mt-1.5 text-[15px] text-muted">
            {{ priceCaption }}
          </p>
        </div>
        <a
          :href="inquiryHref"
          class="btn btn-primary min-h-12 px-5"
        >
          Anfragen
        </a>
      </div>
    </div>
  </article>
</template>
