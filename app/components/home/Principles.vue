<script setup lang="ts">
import { images } from '~/data/images'

const acids = ['Ameisensäure', 'Milchsäure', 'Oxalsäure']
</script>

<template>
  <section
    id="principles"
    class="py-18 sm:py-24 lg:py-32"
  >
    <UContainer>
      <div class="mb-9 grid max-w-170 gap-3.5 sm:mb-14">
        <span class="eyebrow">Unsere Grundsätze</span>
        <h2 class="section-title">
          Gute Bienen machen guten Honig.
        </h2>
        <p class="section-lead">
          Was als Hobby begann, wächst immer mehr zu einem Familienbetrieb. Drei Dinge sind uns dabei wichtig.
        </p>
      </div>

      <div class="grid gap-4 lg:grid-cols-12 lg:auto-rows-[minmax(250px,auto)]">
        <article class="relative min-h-110 overflow-hidden rounded-3xl lg:col-span-7 lg:row-span-2 lg:min-h-130">
          <NuxtImg
            :src="images.bees"
            :provider="images.bees.startsWith('/photos/') ? 'ipx' : 'twicpics'"
            alt="Bienen am Einflugloch eines Bienenstocks"
            loading="lazy"
            sizes="100vw lg:700px"
            class="absolute inset-0 size-full object-cover"
          />
          <div class="absolute inset-0 bg-linear-to-b from-black/0 from-35% to-black/75" />
          <div class="relative flex h-full flex-col justify-end gap-2 p-6 text-white sm:p-8">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="acid in acids"
                :key="acid"
                class="rounded-full border border-white/35 bg-white/15 px-3 py-1.5 text-sm font-semibold"
              >{{ acid }}</span>
            </div>
            <h3 class="text-[clamp(1.625rem,2.8vw,2.25rem)] leading-tight font-bold">
              Gesunde, vitale Bienen
            </h3>
            <p class="max-w-[30em] text-[17px] text-white/85">
              Gegen die Varroa-Milbe setzen wir ausschließlich biologische Säuren ein. Medikamente verwenden wir grundsätzlich nicht.
            </p>
          </div>
        </article>

        <article class="relative min-h-80 overflow-hidden rounded-3xl lg:col-span-5">
          <NuxtImg
            :src="images.gallery.honigernte"
            :provider="images.gallery.honigernte.startsWith('/photos/') ? 'ipx' : 'twicpics'"
            alt="Imkerin zeigt eine verdeckelte Honigwabe"
            loading="lazy"
            sizes="100vw lg:500px"
            class="absolute inset-0 size-full object-cover"
          />
          <div class="absolute inset-0 bg-linear-to-b from-black/0 from-35% to-black/75" />
          <div class="relative flex h-full flex-col justify-end gap-2 p-6 text-white sm:p-8">
            <h3 class="text-[clamp(1.625rem,2.8vw,2.25rem)] leading-tight font-bold">
              Erstklassiger Honig
            </h3>
            <p class="max-w-[30em] text-[17px] text-white/85">
              Kalt geschleudert, schonend gesiebt und direkt ins Glas abgefüllt.
            </p>
          </div>
        </article>

        <article class="flex flex-col justify-between gap-6 rounded-3xl bg-primary p-6 text-neutral-900 sm:p-8 lg:col-span-5">
          <span class="font-display text-[clamp(4rem,8vw,6.5rem)] leading-[0.9] font-extrabold tracking-[-0.05em]">100 %</span>
          <div class="grid gap-2.5">
            <h3 class="text-[clamp(1.625rem,2.8vw,2.25rem)] leading-tight font-bold">
              regional
            </h3>
            <p class="max-w-[30em] text-[17px] text-neutral-900/80">
              Unsere Bienen stehen in den Landkreisen Regen und Straubing-Bogen. Kein Import-Honig, keine Mischung.
            </p>
          </div>
        </article>
      </div>
    </UContainer>
  </section>
</template>
