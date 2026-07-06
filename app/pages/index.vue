<script setup lang="ts">
import { images, twicPicsUrl } from '~/data/images'
import { formatPrice, products } from '~/data/products'
import siteMetadata from '~/siteMetadata'

const knowledgeItems = [
  {
    label: 'Wie schützen wir unsere Bienen?',
    slot: 'varroa',
  },
  {
    label: 'Flüssiger oder fester Honig?',
    slot: 'konsistenz',
  },
  {
    label: 'Wie ernten wir den Honig?',
    slot: 'honigschleuder',
  },
  {
    label: 'Wie lagert man Honig richtig?',
    slot: 'lagern',
  },
  {
    label: 'Warum regionaler Honig?',
    slot: 'regional',
  },
  {
    label: 'Was bedeutet „Honig aus EU- und Nicht-EU-Ländern“?',
    slot: 'eu-honey',
  },
  {
    label: 'Was sind Bienenwachstücher?',
    slot: 'bienenwachs',
  },
]

const galleryImages = [
  {
    alt: 'Bienen auf einer goldenen Honigwabe mit gefüllten Wachszellen',
    src: images.gallery.bienenWabe,
  },
  {
    alt: 'Bienenstöcke auf einer Blumenwiese im Bayerischen Wald',
    src: images.gallery.bayerischerWald,
  },
  {
    alt: 'Imker hebt eine Bienenwabe aus dem Bienenstock',
    src: images.gallery.imkerarbeit,
  },
  {
    alt: 'Frisch geschleuderter Honig fließt durch ein Sieb',
    src: images.gallery.honigernte,
  },
]

const ctaLinks = ref([
  {
    icon: 'i-heroicons-envelope',
    label: 'Kontaktieren Sie uns',
    size: 'xl' as const,
    target: '_blank',
    to: `mailto:${siteMetadata.email}`,
  },
  {
    color: 'neutral' as const,
    icon: 'i-simple-icons-instagram',
    label: 'Auf Instagram folgen',
    size: 'xl' as const,
    target: '_blank',
    to: siteMetadata.instagramUrl,
    variant: 'outline' as const,
  },
])

const { public: { googleMapsApiKey } } = useRuntimeConfig()

function googleMapsEmbedUrl (mapsQuery: string) {
  return `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${mapsQuery}`
}

function googleMapsSearchUrl (mapsQuery: string) {
  return `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`
}

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
    'image': twicPicsUrl(product.image),
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

defineOgImage('NuxtSeoSatori', {
  description: 'Die Imkertradition geht in unserer Familie bis in das Jahr 1890 zurück.',
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
        :src="images.me"
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
            Gemeinsam führen wir unsere <strong>Privatimkerei Hoffmann</strong> im Bayerischen Wald – Renate und ihr Sohn Michael, an zwei Standorten in Prackenbach und Rattenberg.
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
            :src="images.bees"
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
            :src="images.honey"
            alt="Honiggläser der Privatimkerei Hoffmann"
            class="w-full rounded-md h-60"
          />
        </UPageCard>
        <UPageCard
          title="100% regionaler Honig"
          description="Wir imkern an zwei Standorten im Landkreis Regen & Straubing-Bogen"
          color="primary"
          spotlight
          spotlight-color="primary"
        >
          <nuxt-img
            :src="images.regional"
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
              <nuxt-img
                :src="product.image"
                :alt="product.imageAlt"
                loading="lazy"
                width="1280"
                height="1280"
                class="w-full rounded-md object-cover aspect-square"
              />
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
          Honig ist mehr als ein süßer Brotaufstrich – hinter jedem Glas steckt jahrelange Imkertradition, fleißige Bienen und sorgfältige Handarbeit. Hier beantworten wir die häufigsten Fragen rund um unsere Imkerei, die Honigernte und worauf Sie beim Kauf achten sollten.
        </p>
      </template>

      <UAccordion
        :items="knowledgeItems"
        color="primary"
        :unmount-on-hide="false"
        :ui="{ trigger: 'text-base font-medium', body: 'text-base text-muted' }"
      >
        <template #varroa>
          <div class="flex flex-col md:flex-row gap-6 md:gap-8">
            <nuxt-img
              :src="images.wissen.bienen"
              alt="Gesunde Bienen am Einflugloch eines Bienenstocks"
              width="1280"
              height="854"
              class="w-full md:max-w-sm shrink-0 rounded-md"
            />
            <div class="flex flex-col gap-4">
              <p>
                Gesunde Bienen sind die Grundlage für guten Honig. Deshalb legen wir großen Wert auf eine artgerechte Haltung und einen verantwortungsvollen Umgang mit unseren Völkern – ganz ohne den Einsatz von Medikamenten.
              </p>
              <p>
                Zum Schutz vor der Varroa-Milbe setzen wir ausschließlich auf biologische Säuren:
              </p>
              <ul class="list-disc list-inside space-y-1">
                <li>Ameisensäure</li>
                <li>Milchsäure</li>
                <li>Oxalsäure</li>
              </ul>
              <p>
                Diese Säuren sind für die Milben tödlich, werden von den Bienen bei korrekter Handhabung aber gut vertragen. So bleiben unsere Völker vital und leistungsfähig – Jahr für Jahr.
              </p>
              <p class="font-semibold text-foreground">
                Der Einsatz von Medikamenten findet bei uns generell nicht statt.
              </p>
            </div>
          </div>
        </template>

        <template #konsistenz>
          <div class="flex flex-col md:flex-row gap-6 md:gap-8">
            <nuxt-img
              :src="images.wissen.konsistenz"
              alt="Flüssiger und cremiger Honig in Gläsern"
              width="1280"
              height="854"
              class="w-full md:max-w-xs shrink-0 rounded-md"
            />
            <div class="flex flex-col gap-4">
              <p>
                Honig wird flüssig aus der Bienenwabe geerntet. Er besteht aus etwa 80&nbsp;% Frucht- und Traubenzucker, 18&nbsp;% Wasser und rund 1&nbsp;% wertvollen Inhaltsstoffen wie Enzymen, Aminosäuren und Mineralstoffen.
              </p>
              <p>
                Ob Honig flüssig oder fest wird, hängt vom Mischverhältnis der Zucker ab:
              </p>
              <ul class="list-disc list-inside space-y-1">
                <li>Hoher Traubenzuckeranteil → schnellere Kristallisation (fester Honig)</li>
                <li>Regelmäßiges, schonendes Rühren → fein verteilte Kristalle und cremige Konsistenz</li>
              </ul>
              <p>
                Unser cremig gerührter Honig bleibt dauerhaft streichzart – ideal fürs Frühstücksbrot. Flüssiger Honig eignet sich hervorragend zum Süßen von Tee oder Joghurt.
              </p>
              <p class="font-semibold text-foreground">
                Geschmackssache – qualitativ sind beide Varianten gleichwertig.
              </p>
            </div>
          </div>
        </template>

        <template #honigschleuder>
          <div class="flex flex-col md:flex-row gap-6 md:gap-8">
            <nuxt-img
              :src="images.wissen.ernte"
              alt="Honigschleuder zur schonenden Honigernte"
              width="1280"
              height="854"
              class="w-full md:max-w-md shrink-0 rounded-md"
            />
            <div class="flex flex-col gap-4">
              <p>
                Für ein Glas Honig fliegt eine Biene im Schnitt dreimal um die Welt. Jede Sammlerin besucht Hunderte von Blüten, nimmt den Nektar auf und übergibt ihn im Stock den Stockbienen. Diese reduzieren den Wassergehalt, reichern den Saft mit körpereigenen Enzymen an und lagern ihn als Wintervorrat in den Waben ein.
              </p>
              <p>
                Wir entnehmen Honig erst, wenn die Bienen mehr eingelagert haben, als sie selbst benötigen. So bleibt jedem Volk genug Nahrung für den Winter.
              </p>
              <p class="font-medium text-foreground">
                Unser Weg vom Stock ins Glas:
              </p>
              <ol class="list-decimal list-inside space-y-1">
                <li>Honig wird kalt aus der Wabe geschleudert</li>
                <li>Schonend gesiebt, um Wachsteilchen zu entfernen</li>
                <li>Bei Bedarf cremig gerührt</li>
                <li>Direkt in Gläser abgefüllt – ohne jegliche Zusätze</li>
              </ol>
              <p>
                Die Waben geben wir den Bienen zurück, damit sie neuen Honig einlagern können – nachhaltig und ressourcenschonend.
              </p>
            </div>
          </div>
        </template>

        <template #lagern>
          <div class="flex flex-col md:flex-row gap-6 md:gap-8">
            <nuxt-img
              :src="images.wissen.lagerung"
              alt="Honiggläser richtig gelagert in einem dunklen Regal"
              width="1280"
              height="854"
              class="w-full md:max-w-xs shrink-0 rounded-md"
            />
            <div class="flex flex-col gap-4">
              <p>
                Honig ist nahezu unbegrenzt haltbar – vorausgesetzt, er wird richtig gelagert. Dabei gilt:
              </p>
              <ul class="list-disc list-inside space-y-1">
                <li>Kühl und trocken, idealerweise bei 10–18&nbsp;°C</li>
                <li>Dunkel lagern, da Licht den Geschmack beeinträchtigen kann</li>
                <li>Gut verschlossen halten – Honig nimmt sonst Feuchtigkeit und Fremdgerüche auf</li>
                <li>Nicht im Kühlschrank – dort kristallisiert er schneller und wird hart</li>
              </ul>
              <p>
                Flüssiger Honig kann mit der Zeit natürlich kristallisieren – ein Zeichen für echte Qualität, kein Qualitätsmangel. Bei Bedarf lässt er sich vorsichtig im Wasserbad bei maximal 40&nbsp;°C wieder flüssig machen.
              </p>
              <p class="font-semibold text-foreground">
                Wichtig: Niemals in der Mikrowelle erhitzen – das zerstört wertvolle Enzyme und Aromen.
              </p>
            </div>
          </div>
        </template>

        <template #regional>
          <div class="flex flex-col md:flex-row gap-6 md:gap-8">
            <nuxt-img
              :src="images.wissen.regional"
              alt="Bienenstöcke auf einer Blumenwiese im Bayerischen Wald"
              width="1280"
              height="854"
              class="w-full md:max-w-sm shrink-0 rounded-md"
            />
            <div class="flex flex-col gap-4">
              <p>
                Unser Honig stammt ausschließlich aus dem Landkreis Regen und Straubing-Bogen im Bayerischen Wald. Sie wissen genau, wo Ihr Honig herkommt – und welche Blütenpracht unsere Bienen bestäubt haben.
              </p>
              <p class="font-medium text-foreground">
                Vorteile von regionalem Honig:
              </p>
              <ul class="list-disc list-inside space-y-1">
                <li>Kurze Wege vom Stock bis ins Glas</li>
                <li>Einzigartiger Geschmack durch heimische Blütenvielfalt</li>
                <li>Unterstützung lokaler Imker und heimischer Bienenvölker</li>
                <li>Keine Anreicherung oder Vermischung mit Import-Honig</li>
                <li>Schonende, handwerkliche Verarbeitung in kleiner Menge</li>
              </ul>
              <p>
                Regionaler Honig trägt zudem zur Bestäubung heimischer Pflanzen bei und stärkt die Biodiversität in unserer Region.
              </p>
            </div>
          </div>
        </template>

        <template #eu-honey>
          <div class="flex flex-col md:flex-row gap-6 md:gap-8">
            <NuxtLink
              to="https://youtu.be/7NEoC1ETcjc?feature=shared&t=32"
              external
              target="_blank"
              class="shrink-0"
            >
              <nuxt-img
                :src="images.sat1Warencheck"
                alt="Vorschaubild des SAT.1 Warencheck Videos über Honig aus dem Supermarkt"
                width="1246"
                height="694"
                class="w-full md:max-w-xs rounded-md hover:opacity-90 transition-opacity"
              />
            </NuxtLink>
            <div class="flex flex-col gap-4">
              <p>
                Auf nahezu jedem Supermarkt- oder Discounter-Honig steht die Bezeichnung „Honig aus EU- und Nicht-EU-Ländern“. Dahinter verbirgt sich oft ein Blend aus Honigen verschiedenster Herkunft – teils aus mehreren Kontinenten gemischt, aufgeschmolzen und gefiltert.
              </p>
              <p class="font-medium text-foreground">
                Was das für Sie bedeutet:
              </p>
              <ul class="list-disc list-inside space-y-1">
                <li>Kein nachvollziehbarer Ursprung – Sie wissen nicht, woher der Honig wirklich stammt</li>
                <li>Stark erhitzte Verarbeitung kann Aromen und Inhaltsstoffe beeinträchtigen</li>
                <li>Einheitlicher, wenig charakteristischer Geschmack</li>
                <li>Kein direkter Bezug zu heimischen Bienen und Blüten</li>
              </ul>
              <p>
                Im Gegensatz dazu erhalten Sie bei uns echten Honig aus der Region – vom Imker direkt, ohne Umwege.
              </p>
              <UButton
                icon="i-heroicons-play"
                label="SAT.1 Warencheck ansehen"
                to="https://youtu.be/7NEoC1ETcjc?feature=shared&t=32"
                target="_blank"
                variant="outline"
                color="neutral"
                class="w-fit"
              />
            </div>
          </div>
        </template>

        <template #bienenwachs>
          <div class="flex flex-col md:flex-row gap-6 md:gap-8">
            <nuxt-img
              :src="images.wissen.bienenwachs"
              alt="Bienenwachstücher aus der eigenen Imkerei"
              width="1280"
              height="854"
              class="w-full md:max-w-md shrink-0 rounded-md"
            />
            <div class="flex flex-col gap-4">
              <p>
                Bienenwachstücher sind eine natürliche, wiederverwendbare Alternative zu Frischhaltefolie und Alufolie. Sie bestehen aus Baumwollstoff, der mit Bienenwachs aus unserer eigenen Imkerei imprägniert wird.
              </p>
              <p class="font-medium text-foreground">
                Einsatzmöglichkeiten:
              </p>
              <ul class="list-disc list-inside space-y-1">
                <li>Obst, Gemüse, Käse und Brot frisch halten</li>
                <li>Schüsseln und Gläser abdecken</li>
                <li>Brotdosen und Lunchboxen auskleiden</li>
              </ul>
              <p class="font-medium text-foreground">
                Pflege und Haltbarkeit:
              </p>
              <ul class="list-disc list-inside space-y-1">
                <li>Mit kaltem bis handwarmem Wasser und mildem Spülmittel reinigen</li>
                <li>Nicht in der Spülmaschine oder Mikrowelle verwenden</li>
                <li>Bei Bedarf mit dem Bügeleisen auffrischen</li>
                <li>Hält bei guter Pflege bis zu einem Jahr</li>
              </ul>
              <p class="font-semibold text-foreground">
                Nachhaltig, plastikfrei und direkt aus unserer Imkerei – in drei Größen oder als praktisches 3er-Set erhältlich.
              </p>
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
        <nuxt-img
          v-for="image in galleryImages"
          :key="image.src"
          :src="image.src"
          :alt="image.alt"
          loading="lazy"
          width="1280"
          height="1280"
          class="w-full rounded-md object-cover aspect-4/3 shadow-md hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
    </UPageSection>

    <UPageCTA
      id="contact"
      title="Kontakt"
      variant="soft"
      :links="ctaLinks"
      orientation="vertical"
      :ui="{
        title: 'text-left',
        description: 'text-left',
        links: 'justify-start',
      }"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div
          v-for="location in siteMetadata.locations"
          :key="location.mapsQuery"
          class="flex flex-col gap-4 rounded-lg bg-default/50 ring ring-default p-4 sm:p-6"
        >
          <div class="flex flex-col gap-1">
            <h3 class="text-base font-semibold text-highlighted">
              {{ location.name }}
            </h3>
            <div class="flex flex-col text-sm text-muted">
              <span>{{ location.street }}</span>
              <span>{{ location.postalCode }} {{ location.locality }}</span>
            </div>
          </div>

          <iframe
            v-if="googleMapsApiKey"
            class="w-full min-h-[300px] flex-1 border-0 rounded-md"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            :title="`Standort ${location.name} auf Google Maps`"
            :src="googleMapsEmbedUrl(location.mapsQuery)"
          />
          <UButton
            v-else
            icon="i-heroicons-map-pin"
            :to="googleMapsSearchUrl(location.mapsQuery)"
            target="_blank"
            variant="outline"
            color="neutral"
            block
          >
            Auf Google Maps öffnen
          </UButton>
        </div>
      </div>

      <p class="text-sm text-muted text-center w-full">
        An beiden Standorten stehen Bienen unserer Imkerei.
      </p>

      <template #description>
        <div class="flex flex-col gap-2">
          <span class="text-xl">Wir freuen uns auf Ihre Anfrage!</span>
          <div class="flex flex-col gap-4 text-sm">
            <div
              v-for="location in siteMetadata.locations"
              :key="location.mapsQuery"
              class="flex flex-col"
            >
              <span class="font-medium">{{ location.name }}</span>
              <span>{{ location.street }}</span>
              <span>{{ location.postalCode }} {{ location.locality }}</span>
            </div>

            <USeparator />

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
