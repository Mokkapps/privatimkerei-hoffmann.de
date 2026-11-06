<script setup lang="ts">
import siteMetadata, { googleMapsSearchUrl } from '~/siteMetadata'

const toast = useToast()

async function copyEmail () {
  try {
    await navigator.clipboard.writeText(siteMetadata.email)
    toast.add({ color: 'success', icon: 'i-heroicons-check-circle', title: 'E-Mail-Adresse kopiert' })
  }
  catch {
    toast.add({ color: 'error', description: siteMetadata.email, title: 'Kopieren nicht möglich' })
  }
}
</script>

<template>
  <section
    id="contact"
    class="bg-forest-800 py-18 text-forest-100 sm:py-24 lg:py-32 dark:bg-forest-900"
  >
    <UContainer>
      <div class="mb-9 grid max-w-170 gap-3.5 sm:mb-14">
        <span class="eyebrow text-primary">Kontakt</span>
        <h2 class="section-title text-forest-100">
          Wir freuen uns auf Ihre Anfrage.
        </h2>
        <p class="text-lg text-forest-300 sm:text-[1.1875rem]">
          Am schnellsten geht es telefonisch. An beiden Standorten stehen Bienen unserer Imkerei.
        </p>
      </div>

      <div class="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="grid min-w-0 content-start gap-5.5 rounded-3xl bg-forest-700 p-6.5 sm:p-11 dark:bg-forest-800">
          <span class="text-base text-forest-300">Rufen Sie uns an</span>
          <a
            :href="siteMetadata.phoneHref"
            class="font-display text-[clamp(2.5rem,6vw,4.25rem)] leading-none font-extrabold tracking-[-0.035em] text-forest-100 tabular-nums transition-colors hover:text-primary"
          >{{ siteMetadata.phoneDisplay }}</a>

          <div class="grid gap-3 border-t border-white/12 pt-5.5 text-lg">
            <div class="flex min-w-0 flex-wrap items-center gap-3">
              <UIcon
                name="i-heroicons-envelope"
                class="size-5.5 shrink-0 text-primary"
              />
              <a
                :href="`mailto:${siteMetadata.email}`"
                class="break-all text-forest-100 underline-offset-4 hover:underline"
              >{{ siteMetadata.email }}</a>
              <button
                type="button"
                class="rounded-full border border-white/25 px-3 py-2 text-sm leading-none font-semibold text-forest-100 transition-colors hover:border-forest-100"
                @click="copyEmail"
              >
                Kopieren
              </button>
            </div>
            <div class="flex min-w-0 items-center gap-3">
              <UIcon
                name="i-simple-icons-instagram"
                class="size-5.5 shrink-0 text-primary"
              />
              <NuxtLink
                :to="siteMetadata.instagramUrl"
                external
                target="_blank"
                class="text-forest-100 underline-offset-4 hover:underline"
              >
                {{ siteMetadata.instagramHandle }}
              </NuxtLink>
            </div>
          </div>

          <a
            :href="`mailto:${siteMetadata.email}?subject=${encodeURIComponent('Honig-Anfrage')}`"
            class="btn btn-primary justify-self-start"
          >
            E-Mail schreiben
          </a>
        </div>

        <div class="grid min-w-0 gap-5">
          <address
            v-for="location in siteMetadata.locations"
            :key="location.mapsQuery"
            class="grid gap-1.5 rounded-3xl bg-forest-700 px-7 py-6.5 not-italic dark:bg-forest-800"
          >
            <span class="text-[15px] text-forest-300">{{ location.name }}</span>
            <h3 class="text-3xl font-bold text-forest-100">
              {{ location.locality }}
            </h3>
            <span class="text-lg text-forest-100">
              {{ location.street }}<br>
              {{ location.postalCode }} {{ location.locality }}
            </span>
            <span class="text-[15px] text-forest-300">{{ location.district }}</span>
            <NuxtLink
              :to="googleMapsSearchUrl(location.mapsQuery)"
              external
              target="_blank"
              class="mt-2.5 inline-flex items-center gap-2 justify-self-start font-semibold text-primary hover:underline hover:underline-offset-4"
            >
              Route planen
              <UIcon
                name="i-heroicons-arrow-up-right-20-solid"
                class="size-4.5"
              />
            </NuxtLink>
          </address>
        </div>
      </div>
    </UContainer>
  </section>
</template>
