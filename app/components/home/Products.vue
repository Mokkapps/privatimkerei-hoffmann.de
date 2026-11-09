<script setup lang="ts">
import { products } from '~/data/products'
import siteMetadata from '~/siteMetadata'

const steps = [
  { text: 'Wir sagen Ihnen, was gerade da ist, und vereinbaren eine Abholzeit.', title: 'Termin ausmachen' },
  { text: 'In Prackenbach oder Rattenberg, je nachdem, was für Sie näher liegt.', title: 'Abholen' },
]
</script>

<template>
  <section
    id="products"
    class="bg-muted py-18 sm:py-24 lg:py-32"
  >
    <UContainer>
      <div class="mb-9 grid max-w-170 gap-3.5 sm:mb-14">
        <span class="eyebrow">Aus unserer Imkerei</span>
        <h2 class="section-title">
          Direkt vom Imker.
        </h2>
        <p class="section-lead">
          Honig und Bienenwachstücher stammen aus unserer Hobby-Imkerei. Wenn Sie etwas davon mit nach Hause nehmen möchten, melden Sie sich einfach telefonisch oder per E-Mail. Die Abholung vereinbaren wir persönlich.
        </p>
      </div>

      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <HomeProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="md:max-lg:last:col-span-2"
        />
      </div>

      <ol
        aria-label="So klappt die Abholung"
        class="mt-5 grid overflow-hidden rounded-3xl border border-default bg-surface md:grid-cols-3"
      >
        <li class="grid grid-cols-[40px_1fr] items-start gap-4 px-7 py-6.5">
          <span class="grid size-10 place-items-center rounded-full bg-honey-100 font-display text-lg font-bold text-honey-ink dark:bg-honey-950">1</span>
          <div>
            <h3 class="mb-1 text-[21px] font-bold text-highlighted">
              Melden Sie sich
            </h3>
            <p class="text-base text-muted">
              Rufen Sie an unter
              <a
                :href="siteMetadata.phoneHref"
                class="font-semibold whitespace-nowrap text-highlighted underline underline-offset-3"
              >{{ siteMetadata.phoneDisplay }}</a>
              oder schreiben Sie eine E-Mail.
            </p>
          </div>
        </li>
        <li
          v-for="(step, index) in steps"
          :key="step.title"
          class="grid grid-cols-[40px_1fr] items-start gap-4 border-default px-7 py-6.5 max-md:border-t md:border-l"
        >
          <span class="grid size-10 place-items-center rounded-full bg-honey-100 font-display text-lg font-bold text-honey-ink dark:bg-honey-950">{{ index + 2 }}</span>
          <div>
            <h3 class="mb-1 text-[21px] font-bold text-highlighted">
              {{ step.title }}
            </h3>
            <p class="text-base text-muted">
              {{ step.text }}
            </p>
          </div>
        </li>
      </ol>

      <p class="mt-6 text-center text-sm text-muted">
        Alle Preise inkl. MwSt. Verfügbarkeit je nach Saison und Ernte – fragen Sie gerne unverbindlich an.
      </p>
    </UContainer>
  </section>
</template>
