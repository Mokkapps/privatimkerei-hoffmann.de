<script setup lang="ts">
import { images } from '~/data/images'

const galleryImages = [
  {
    alt: 'Wiesen und Fichtenwälder aus der Luft',
    caption: 'Unsere Heimat',
    class: 'col-span-2 aspect-[4/3] md:col-span-1 md:row-span-2 md:aspect-auto',
    src: images.regional,
  },
  {
    alt: 'Bienen auf einer goldenen Honigwabe mit gefüllten Wachszellen',
    caption: 'Auf der Wabe',
    class: 'aspect-square md:aspect-auto',
    src: images.gallery.bienenWabe,
  },
  {
    alt: 'Imker hebt eine Bienenwabe aus dem Bienenstock',
    caption: 'Am Bienenstand',
    class: 'aspect-square md:aspect-auto',
    src: images.gallery.imkerarbeit,
  },
  {
    alt: 'Drei Gläser flüssiger Honig auf einem Bienenstock in der Abendsonne',
    caption: 'Ins Glas abgefüllt',
    class: 'col-span-2 aspect-video md:aspect-auto',
    src: images.products.honigFluessig,
  },
]
</script>

<template>
  <section
    id="gallery"
    class="py-18 sm:py-24 lg:py-32"
  >
    <UContainer>
      <div class="mb-9 grid max-w-170 gap-3.5 sm:mb-14">
        <span class="eyebrow">Einblicke</span>
        <h2 class="section-title">
          Von der Wabe bis ins Glas.
        </h2>
      </div>

      <div class="grid grid-cols-2 gap-3.5 md:grid-cols-[2fr_1fr_1fr] md:grid-rows-[260px_260px]">
        <figure
          v-for="image in galleryImages"
          :key="image.src"
          class="group relative m-0 min-w-0 overflow-hidden rounded-2xl"
          :class="image.class"
        >
          <NuxtImg
            :placeholder="[24, 24, 40, 3]"
            placeholder-class="blur-sm"
            :src="image.src"
            :provider="image.src.startsWith('/photos/') ? 'ipx' : 'twicpics'"
            :alt="image.alt"
            loading="lazy"
            sizes="100vw md:50vw lg:600px"
            class="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
          />
          <figcaption class="absolute right-3 bottom-3 left-3 text-sm font-semibold text-white [text-shadow:0_1px_8px_rgb(0_0_0/0.6)]">
            {{ image.caption }}
          </figcaption>
        </figure>
      </div>
    </UContainer>
  </section>
</template>
