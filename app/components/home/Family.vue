<script setup lang="ts">
import { images } from '~/data/images'
import siteMetadata from '~/siteMetadata'

const milestones = [
  {
    label: 'Die ersten Bienen in der Familie',
    title: String(siteMetadata.foundingYear),
  },
  { label: 'Aus Freude an den Bienen weitergeführt', title: 'Hobby' },
  { label: 'Zwei Hobby-Imker in der Familie', title: 'Heute' },
]
</script>

<template>
  <section
    id="family"
    class="py-18 sm:py-24 lg:py-32"
  >
    <UContainer class="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-22">
      <div class="grid min-w-0 grid-cols-2 gap-3.5 max-lg:order-2">
        <NuxtImg
          :src="images.gallery.bayerischerWald"
          :provider="images.gallery.bayerischerWald.startsWith('/photos/') ? 'ipx' : 'twicpics'"
          alt="Arbeit an geöffneten Bienenstöcken im Grünen"
          loading="lazy"
          sizes="100vw lg:520px"
          class="col-span-2 aspect-[16/10] size-full rounded-2xl object-cover"
        />
        <NuxtImg
          :src="images.wissen.bienen"
          :provider="images.wissen.bienen.startsWith('/photos/') ? 'ipx' : 'twicpics'"
          alt="Gesunde Bienen am Einflugloch eines Bienenstocks"
          loading="lazy"
          sizes="50vw lg:260px"
          class="aspect-square size-full rounded-2xl object-cover"
        />
        <NuxtImg
          :src="images.wissen.ernte"
          :provider="images.wissen.ernte.startsWith('/photos/') ? 'ipx' : 'twicpics'"
          alt="Imkerin mit einer verdeckelten Honigwabe"
          loading="lazy"
          sizes="50vw lg:260px"
          class="aspect-square size-full rounded-2xl object-cover"
        />
      </div>

      <div class="grid min-w-0 gap-5.5">
        <span class="eyebrow">Unser Familienhobby</span>
        <h2 class="section-title">
          Seit {{ siteMetadata.foundingYear }} halten wir Bienen.
        </h2>
        <p class="max-w-[36em] text-lg text-muted sm:text-[1.1875rem]">
          Die Imkertradition reicht in unserer Familie bis ins <strong class="font-semibold text-highlighted">Jahr {{ siteMetadata.foundingYear }}</strong> zurück. Heute führen <strong class="font-semibold text-highlighted">Renate Hoffmann und ihr Sohn Michael</strong> die Imkerei als gemeinsames Hobby weiter.
        </p>
        <p class="max-w-[36em] text-lg text-muted sm:text-[1.1875rem]">
          Die Freude an den Bienen verbindet uns. Wir verbringen gerne Zeit an unseren Bienenstöcken und geben die Erfahrungen aus unserer Familie weiter.
        </p>
        <ol class="mt-2 grid gap-3 sm:grid-cols-3">
          <li
            v-for="milestone in milestones"
            :key="milestone.title"
            class="grid gap-1 border-t-2 border-default pt-3.5 last:border-primary"
          >
            <span class="font-display text-2xl leading-none font-bold tracking-tight text-highlighted tabular-nums">{{ milestone.title }}</span>
            <span class="text-[15px] leading-snug text-muted">{{ milestone.label }}</span>
          </li>
        </ol>
      </div>
    </UContainer>
  </section>
</template>
