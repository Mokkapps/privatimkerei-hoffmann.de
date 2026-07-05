<script setup lang="ts">
import { formatPrice, products } from '~/data/products'
import siteMetadata from '~/siteMetadata'

const faqItems = [
  {
    label: 'Flüssiger oder fester Honig?',
    slot: 'konsistenz',
  },
  {
    label: 'Wie ernten wir den Honig?',
    slot: 'honigschleuder',
  },
  {
    label: 'Was bedeutet „Honig aus EU- und Nicht-EU-Ländern“?',
    slot: 'eu-honey',
  },
]

const traditionItems = [
  {
    date: '1890',
    description: 'Die Imkertradition unserer Familie beginnt – seit über 130 Jahren wird das Wissen rund um Bienen und Honig von Generation zu Generation weitergegeben.',
    icon: 'i-heroicons-book-open',
    title: 'Der Anfang',
  },
  {
    date: 'Vom Hobby zum Familienbetrieb',
    description: 'Was als Hobby begann, wächst immer mehr zu einem Familienbetrieb heran – heute führen Renate und Michael die Imkerei gemeinsam mit viel Liebe zur Honigbiene und großem Pflegeaufwand.',
    icon: 'i-heroicons-heart',
    title: 'Mit Leidenschaft',
  },
  {
    date: 'Heute',
    description: 'Wir imkern zu 100% regional im Landkreis Regen & Straubing-Bogen im Bayerischen Wald – nachhaltig und ohne Medikamenteneinsatz.',
    icon: 'i-heroicons-map-pin',
    title: 'Regional & nachhaltig',
  },
]

const galleryImages = [
  {
    alt: 'Bienen auf einer goldenen Honigwabe mit gefüllten Wachszellen',
    src: '/images/galerie-bienen-wabe.webp',
  },
  {
    alt: 'Bienenstöcke auf einer Blumenwiese im Bayerischen Wald',
    src: '/images/galerie-bayerischer-wald.webp',
  },
  {
    alt: 'Imker hebt eine Bienenwabe aus dem Bienenstock',
    src: '/images/galerie-imkerarbeit.webp',
  },
  {
    alt: 'Frisch geschleuderter Honig fließt durch ein Sieb',
    src: '/images/galerie-honigernte.webp',
  },
]

const ctaLinks = ref([
  {
    icon: 'i-heroicons-envelope',
    label: 'Kontaktieren Sie uns',
    size: 'xl',
    target: '_blank',
    to: `mailto:${siteMetadata.email}`,
  },
  {
    color: 'neutral' as const,
    icon: 'i-simple-icons-instagram',
    label: 'Auf Instagram folgen',
    size: 'xl',
    target: '_blank',
    to: siteMetadata.instagramUrl,
    variant: 'outline' as const,
  },
])

const { public: { googleMapsApiKey } } = useRuntimeConfig()

const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}
    &q=Pfarrhofstraße+7,94267+Prackenbach`

useSeoMeta({
  description: siteMetadata.description,
  ogDescription: siteMetadata.description,
  ogTitle: 'Privatimkerei Hoffmann | Honig aus dem Bayerischen Wald',
  title: 'Honig aus dem Bayerischen Wald – Imkertradition seit 1890',
})

useSchemaOrg([
  ...products.map(product => ({
    '@type': 'Product' as const,
    'description': product.description,
    'image': `${siteMetadata.url}${product.image}`,
    'name': product.name,
    'offers': product.variants.map(variant => ({
      '@type': 'Offer' as const,
      'availability': 'https://schema.org/InStock',
      'name': variant.label,
      'price': variant.price.toFixed(2),
      'priceCurrency': 'EUR',
    })),
  })),
])

defineOgImageComponent('NuxtSeo', {
  description: 'Die Imkertradition geht in unserer Familie bis in das Jahr 1890 zurück.',
  theme: '#B29712',
  title: siteMetadata.title,
})
</script>

<template>
  <div>
    <UPageHero
      :links="[
        { label: 'Zu den Produkten', icon: 'i-heroicons-shopping-bag', size: 'xl', to: '/#products' },
        { label: 'Kontaktieren Sie uns', icon: 'i-heroicons-envelope', size: 'xl', color: 'neutral', variant: 'outline', to: '/#contact' },
      ]"
      orientation="horizontal"
    >
      <template #top>
        <div class="absolute rounded-full dark:bg-(--ui-primary) blur-[300px] size-60 sm:size-80 transform -translate-x-1/2 left-1/2 -translate-y-80" />

        <LazyStarsBg />
      </template>

      <nuxt-img
        src="/me.jpg"
        alt="Renate und Michael Hoffmann von der Privatimkerei Hoffmann"
        class="w-full rounded-md shadow-xl"
      />

      <template #headline>
        <UBadge
          color="primary"
          variant="subtle"
          size="lg"
          icon="i-heroicons-sparkles"
        >
          Imkertradition seit 1890
        </UBadge>
      </template>

      <template #title>
        <div class="flex flex-col">
          <span>Hallo!</span>
          <span>Wir sind Renate und Michael Hoffmann.</span>
        </div>
      </template>

      <template #description>
        <div class="flex flex-col gap-2">
          <p>
            Gemeinsam führen wir unsere <strong>Privatimkerei Hoffmann</strong> im Bayerischen Wald – Renate und ihr Sohn Michael.
          </p>
          <p>
            Die Imkertradition geht in unserer Familie bis in das <strong>Jahr 1890</strong> zurück.
          </p>
          <p>
            Was als Hobby begann, wächst nun immer mehr zu einem <strong>Familienbetrieb</strong> heran.
          </p>
          <p>
            Mit viel <strong>Liebe zur Honigbiene</strong> und großem Pflegeaufwand arbeiten wir auf eine nachhaltige Weise mit und an <strong>gesunden Honigbienen</strong>, denn nur gesunde Honigbienen sind ein Garant für unsere Zukunft.
          </p>
        </div>
      </template>
    </UPageHero>

    <UPageSection
      title="Tradition seit 1890"
      icon="i-heroicons-clock"
      description="Über 130 Jahre Erfahrung und Liebe zur Honigbiene – von Generation zu Generation weitergegeben."
    >
      <UTimeline
        :items="traditionItems"
        orientation="horizontal"
        class="hidden md:flex w-full"
        :ui="{ description: 'text-muted' }"
      />
      <UTimeline
        :items="traditionItems"
        orientation="vertical"
        class="md:hidden"
        :ui="{ description: 'text-muted' }"
      />
    </UPageSection>

    <UPageSection
      title="Unsere Grundsätze"
      icon="i-heroicons-star"
    >
      <UPageGrid
        id="principles"
      >
        <UPageCard
          title="Gesunde, vitale Bienen"
          description="Ohne Medikamenteneinsatz"
          color="primary"
          spotlight
          spotlight-color="primary"
        >
          <nuxt-img
            src="/bees.jpg"
            alt="Bienen am Einflugloch eines Bienenstocks"
            class="w-full rounded-md h-60"
          />
        </UPageCard>
        <UPageCard
          title="Erstklassiger Honig"
          description="Hergestellt nach den strengen Qualitätskriterien"
          color="primary"
          spotlight
          spotlight-color="primary"
        >
          <nuxt-img
            src="/honey.jpg"
            alt="Honiggläser der Privatimkerei Hoffmann"
            class="w-full rounded-md h-60"
          />
        </UPageCard>
        <UPageCard
          title="100% regionaler Honig"
          description="Wir imkern nur im Landkreis Regen & Straubing-Bogen"
          color="primary"
          spotlight
          spotlight-color="primary"
        >
          <nuxt-img
            src="/regional.jpg"
            alt="Landschaft im Landkreis Regen und Straubing-Bogen"
            class="object-fit w-full rounded-md h-60 "
          />
        </UPageCard>
      </UPageGrid>
    </UPageSection>

    <UPageSection
      icon="i-heroicons-shopping-cart"
      title="Unsere Produkte"
    >
      <template #description>
        <p id="products">
          Alle Produkte stammen direkt aus unserer Imkerei im Bayerischen Wald. Bestellungen nehmen wir gerne telefonisch oder per E-Mail entgegen – Abholung nach Absprache.
        </p>
      </template>

      <UPageGrid>
        <UPageCard
          v-for="product in products"
          :key="product.id"
          :title="product.name"
          spotlight
          spotlight-color="primary"
        >
          <template #header>
            <div class="relative">
              <img
                :src="product.image"
                :alt="product.imageAlt"
                loading="lazy"
                width="1280"
                height="1280"
                class="w-full rounded-md object-cover aspect-square"
              >
              <UBadge
                v-if="product.badge"
                color="primary"
                variant="solid"
                size="lg"
                class="absolute top-3 right-3"
              >
                {{ product.badge }}
              </UBadge>
            </div>
          </template>

          <template #description>
            <div class="flex flex-col gap-4">
              <p>{{ product.description }}</p>

              <ul class="flex flex-col gap-1">
                <li
                  v-for="detail in product.details"
                  :key="detail"
                  class="flex items-start gap-2"
                >
                  <UIcon
                    name="i-heroicons-check-circle"
                    class="text-primary size-5 shrink-0 mt-0.5"
                  />
                  <span>{{ detail }}</span>
                </li>
              </ul>

              <USeparator />

              <ul class="flex flex-col gap-1.5">
                <li
                  v-for="variant in product.variants"
                  :key="variant.label"
                  class="flex items-center justify-between gap-2"
                >
                  <span>{{ variant.label }}</span>
                  <span class="font-bold text-primary whitespace-nowrap">{{ formatPrice(variant.price) }}</span>
                </li>
              </ul>
            </div>
          </template>

          <template #footer>
            <UButton
              icon="i-heroicons-envelope"
              :to="`mailto:${siteMetadata.email}?subject=Bestellung: ${product.name}`"
              target="_blank"
              block
            >
              Jetzt anfragen
            </UButton>
          </template>
        </UPageCard>
      </UPageGrid>

      <p class="text-sm text-muted text-center">
        Alle Preise inkl. MwSt. Verfügbarkeit je nach Saison und Ernte – fragen Sie gerne unverbindlich an.
      </p>
    </UPageSection>

    <UPageSection
      icon="i-heroicons-academic-cap"
      title="Wissenswertes rund um den Honig"
    >
      <template #description>
        <p id="knowledge">
          In unserer Imkerei verwenden wir zum Kampf gegen die Varroa-Milbe ausschließlich biologische Säuren (Ameisensäure, Milchsäure und Oxalsäure). Diese Säuren sind für die Milben tödlich, werden aber von den Bienen, bei korrekter Handhabung, gut vertragen.
        </p>
        <p class="font-bold">
          Der Einsatz von Medikamenten findet bei uns generell nicht statt!
        </p>
      </template>

      <UAccordion
        :items="faqItems"
        color="primary"
        :unmount-on-hide="false"
        :ui="{ trigger: 'text-base', body: 'text-base text-muted' }"
      >
        <template #konsistenz>
          <div class="flex flex-col md:flex-row gap-8">
            <nuxt-img
              src="/honey.jpg"
              alt="Flüssiger und cremiger Honig im Glas"
              class="w-full md:max-w-sm rounded-md"
            />
            <div>
              <p>Der Honig wird flüssig aus der Bienenwabe geerntet. Er besteht aus ca. 80% Frucht- und Traubenzucker, 18% Wasser und 1% gesunder Wirkstoffe. Ob der Honig flüssig oder fest ist, entscheidet das Mischverhältnis von Frucht- und Traubenzucker. Festen Honig bezeichnet man auch als kristallisierten Honig. Honig mit hohem Traubenzuckeranteil kristallisiert schneller. Durch regelmäßiges Rühren des Honigs werden die Zuckerkristalle zerkleinert und sie verteilen sich gleichmäßig, wodurch cremiger Honig entsteht. Der cremig-gerührte Honig bleibt in dieser Konsistenz.</p>
              <p class="font-bold mt-4">
                Letztendlich bleibt es aber Geschmackssache, ob man flüssigen oder festen Honig lieber mag. Qualitativ sind beide Honigvarianten gleich gut.
              </p>
            </div>
          </div>
        </template>
        <template #honigschleuder>
          <div class="flex flex-col md:flex-row gap-8">
            <nuxt-img
              src="/honigschleuder.jpg"
              alt="Honigschleuder zur Honigernte"
              class="w-full md:max-w-sm rounded-md"
            />
            <div>
              <p>Honig ist seit vielen Jahrhunderten eine kostbare Substanz und die Entstehung ist ein langwieriger Prozess. Insgesamt fliegt die Biene für ein Glas Honig dreimal um die Welt. Eine Biene fliegt mehrere hundert Blüten an und sammelt in ihrer Honigblase den süßen Saft. Im Bienenstock übergibt die Sammlerin diesen Saft den Stockbienen. Um den Wassergehalt zu reduzieren, fügt die Stockbiene dem Saft körpereigene Substanzen hinzu und wandelt ihn so in Honig um. Anschließend wird der Honig in den Waben eingelagert und dient dem Volk als Wintervorrat. Der Imker darf erst Honig entnehmen, wenn die Bienen mehr einlagern, als sie selbst als Nahrung benötigen. Zur Honiggewinnung wird der Honig aus der Wabe geschleudert. Die Waben werden anschließend den Bienen zurückgegeben, damit sie neuen Honig einlagern können.</p>
              <p class="font-bold mt-4">
                Unser Honig wird kalt geschleudert, gesiebt (eventuell noch cremig gerührt) und in Gläser abgefüllt.
                Es ist ein reines Naturprodukt ohne irgendwelche Zusätze.
              </p>
            </div>
          </div>
        </template>
        <template #eu-honey>
          <div class="flex flex-col md:flex-row gap-8">
            <NuxtLink
              to="https://youtu.be/7NEoC1ETcjc?feature=shared&t=32"
              external
              target="_blank"
            >
              <nuxt-img
                src="/sat1-warencheck.png"
                alt="Vorschaubild des SAT.1 Warencheck Videos über Honig aus dem Supermarkt"
                class="w-full md:max-w-sm rounded-md"
              />
            </NuxtLink>
            <div>
              <p>Auf nahezu jedem Super- oder Biomarkt-Honig findet man die Bezeichnung „Honig aus EU- und Nicht-EU-Ländern“. Dieses Video klärt darüber auf, wo der Honig aus dem Supermarkt herkommt und wie er oft gepanscht wird.</p>
            </div>
          </div>
        </template>
      </UAccordion>
    </UPageSection>

    <UPageSection
      icon="i-heroicons-photo"
      title="Einblicke in die Imkerei"
    >
      <template #description>
        <p id="gallery">
          Ein paar Eindrücke aus dem Alltag mit unseren Bienen – von der Wabe bis ins Glas.
        </p>
      </template>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <img
          v-for="image in galleryImages"
          :key="image.src"
          :src="image.src"
          :alt="image.alt"
          loading="lazy"
          width="1280"
          height="1280"
          class="w-full rounded-md object-cover aspect-4/3 shadow-md hover:scale-[1.02] transition-transform duration-300"
        >
      </div>
    </UPageSection>

    <UPageCTA
      id="contact"
      title="Kontakt"
      variant="soft"
      description="Wir freuen uns über Ihre Anfrage!"
      :links="ctaLinks"
      orientation="horizontal"
    >
      <UPageCard
        title="Standort"
      >
        <template #description>
          <iframe
            v-if="googleMapsApiKey"
            class="w-full md:max-w-[600px] h-[450px] border-0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            title="Standort der Privatimkerei Hoffmann auf Google Maps"
            :src="googleMapsUrl"
          />
          <div
            v-else
            class="flex flex-col gap-4"
          >
            <img
              src="/images/galerie-bayerischer-wald.webp"
              alt="Bienenstöcke auf einer Wiese im Bayerischen Wald"
              loading="lazy"
              width="1280"
              height="960"
              class="w-full md:max-w-[600px] rounded-md object-cover"
            >
            <UButton
              icon="i-heroicons-map-pin"
              to="https://www.google.com/maps/search/?api=1&query=Pfarrhofstraße+7,94267+Prackenbach"
              target="_blank"
              variant="outline"
              color="neutral"
            >
              Auf Google Maps öffnen
            </UButton>
          </div>
        </template>
      </UPageCard>

      <template #description>
        <div class="flex flex-col gap-2">
          <span class="text-xl">Wir freuen uns auf Ihre Anfrage!</span>
          <div class="flex flex-col text-sm">
            <span
              v-for="beekeeper in siteMetadata.beekeepers"
              :key="beekeeper"
            >{{ beekeeper }}</span>
            <span>{{ siteMetadata.address.street }}</span>
            <span>{{ siteMetadata.address.postalCode }} {{ siteMetadata.address.locality }}</span>
            <span>Telefon: <NuxtLink
              :to="`tel:${siteMetadata.phone}`"
              class="text-primary underline"
            >{{ siteMetadata.phone }}</NuxtLink></span>
            <span>Email: <NuxtLink
              :to="`mailto:${siteMetadata.email}`"
              class="text-primary underline"
            >{{ siteMetadata.email }}</NuxtLink></span>
            <span>Instagram: <NuxtLink
              :to="siteMetadata.instagramUrl"
              external
              target="_blank"
              class="text-primary underline"
            >@privatimkerei.hoffmann</NuxtLink></span>
          </div>
        </div>
      </template>

      <div class="absolute rounded-full dark:bg-(--ui-primary) blur-[250px] size-40 sm:size-50 transform -translate-x-1/2 left-1/2 -translate-y-80" />
      <StarsBg />
    </UPageCTA>
  </div>
</template>
