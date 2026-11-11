<script setup lang="ts">
import { images } from '~/data/images'
import siteMetadata from '~/siteMetadata'
</script>

<template>
  <section class="pt-10 pb-16 sm:pt-14 lg:pt-18 lg:pb-24">
    <UContainer class="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
      <div class="grid min-w-0 gap-7">
        <span class="inline-flex items-center gap-2.5 justify-self-start rounded-full bg-honey-100 py-1.5 pr-3.5 pl-2 text-[15px] font-semibold text-honey-ink dark:bg-honey-950">
          <span class="rounded-full bg-primary px-2.5 py-0.5 font-bold text-neutral-900">{{ siteMetadata.foundingYear }}</span>
          Imkertradition in der Familie
        </span>

        <h1 class="text-[clamp(2.875rem,7.2vw,5.75rem)] leading-[0.98] font-extrabold tracking-[-0.035em] text-balance text-highlighted">
          Unser Hobby, unser Honig aus dem <span class="text-honey-ink">Bayerischen Wald</span>.
        </h1>

        <p class="max-w-[34em] text-lg text-muted sm:text-xl">
          Wir sind <strong class="font-semibold text-highlighted">Renate und Michael Hoffmann</strong>, Mutter und Sohn und zwei Hobby-Imker. Wir führen die Imkertradition unserer Familie weiter und kümmern uns in unserer Freizeit um unsere Bienen in Prackenbach und Rattenberg.
        </p>

        <div class="flex flex-wrap gap-3">
          <NuxtLink
            to="/#products"
            class="btn btn-primary"
          >
            Honig ansehen
            <UIcon
              name="i-heroicons-arrow-right"
              class="size-5"
            />
          </NuxtLink>
          <NuxtLink
            to="/#contact"
            class="btn btn-ghost"
          >
            So erreichen Sie uns
          </NuxtLink>
        </div>
      </div>

      <div class="relative min-w-0 max-w-130 pb-8 pl-8 lg:max-w-none lg:pb-10 lg:pl-10">
        <div class="aspect-[4/5] overflow-hidden rounded-3xl shadow-xl shadow-neutral-900/15">
          <NuxtImg
            :placeholder="[24, 24, 40, 3]"
            placeholder-class="blur-sm"
            :src="images.me"
            :provider="images.me.startsWith('/photos/') ? 'ipx' : 'twicpics'"
            alt="Renate Hoffmann lächelt bei der Honigernte neben einem Rahmen mit Honigwaben"
            width="1300"
            height="1733"
            sizes="100vw sm:520px lg:560px"
            preload
            class="size-full object-cover object-[50%_30%]"
          />
        </div>
        <div class="absolute bottom-0 left-0 aspect-square w-[42%] overflow-hidden rounded-[22px] border-6 border-default shadow-xl shadow-neutral-900/15">
          <NuxtImg
            :placeholder="[24, 24, 40, 3]"
            placeholder-class="blur-sm"
            :src="images.honey"
            :provider="images.honey.startsWith('/photos/') ? 'ipx' : 'twicpics'"
            alt="Honigglas der Privatimkerei Hoffmann auf einem Granitstein"
            width="1300"
            height="975"
            sizes="50vw sm:240px"
            class="size-full object-cover"
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>
