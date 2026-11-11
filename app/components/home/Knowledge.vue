<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

import { images } from '~/data/images'

const sat1WarencheckUrl = 'https://youtu.be/7NEoC1ETcjc?feature=shared&t=32'

const items: Array<AccordionItem> = [
  { label: 'Wie schützen wir unsere Bienen?', slot: 'varroa', value: 'varroa' },
  { label: 'Flüssiger oder fester Honig?', slot: 'konsistenz', value: 'konsistenz' },
  { label: 'Wie ernten wir den Honig?', slot: 'honigschleuder', value: 'honigschleuder' },
  { label: 'Wie lagert man Honig richtig?', slot: 'lagern', value: 'lagern' },
  { label: 'Warum regionaler Honig?', slot: 'regional', value: 'regional' },
  { label: 'Was bedeutet „Honig aus EU- und Nicht-EU-Ländern“?', slot: 'eu-honey', value: 'eu-honey' },
  { label: 'Was sind Bienenwachstücher?', slot: 'bienenwachs', value: 'bienenwachs' },
]
</script>

<template>
  <section
    id="knowledge"
    class="bg-muted py-18 sm:py-24 lg:py-32"
  >
    <UContainer class="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div class="grid min-w-0 gap-4.5 lg:sticky lg:top-[calc(var(--ui-header-height)+2rem)]">
        <span class="eyebrow">Wissenswertes</span>
        <h2 class="section-title">
          Fragen rund um den Honig.
        </h2>
        <p class="section-lead">
          Bei unserem Hobby lernen wir immer wieder etwas über Bienen und Honig dazu. Hier teilen wir unsere Erfahrungen und beantworten häufige Fragen.
        </p>
        <NuxtImg
          :placeholder="[24, 24, 40, 3]"
          placeholder-class="blur-sm"
          :src="images.wissen.konsistenz"
          :provider="images.wissen.konsistenz.startsWith('/photos/') ? 'ipx' : 'twicpics'"
          alt="Flüssiger und cremiger Honig in Gläsern"
          loading="lazy"
          sizes="lg:440px"
          class="mt-2 hidden aspect-[4/3] w-full rounded-2xl object-cover lg:block"
        />
      </div>

      <UAccordion
        :items="items"
        default-value="varroa"
        :unmount-on-hide="false"
        :ui="{
          root: 'grid min-w-0 gap-2.5',
          item: 'rounded-2xl border border-default bg-surface last:border transition-colors data-[state=open]:border-honey-300 dark:data-[state=open]:border-honey-800',
          trigger: 'gap-4 px-5.5 py-5 text-left text-[19px] leading-snug font-semibold text-highlighted',
          body: 'grid gap-3 px-5.5 pb-5.5 text-[17px] text-muted',
        }"
      >
        <template #trailing="{ open }">
          <span
            class="ms-auto grid size-8 shrink-0 place-items-center rounded-full transition-[transform,background-color] duration-200"
            :class="open ? 'rotate-45 bg-primary text-neutral-900' : 'bg-muted text-highlighted'"
          >
            <UIcon
              name="i-heroicons-plus-20-solid"
              class="size-4"
            />
          </span>
        </template>

        <template #varroa-body>
          <p>
            Gesunde Bienen sind die Grundlage für guten Honig. Deshalb legen wir großen Wert auf eine artgerechte Haltung und einen verantwortungsvollen Umgang mit unseren Völkern – ganz ohne den Einsatz von Medikamenten.
          </p>
          <p>Zum Schutz vor der Varroa-Milbe setzen wir ausschließlich auf biologische Säuren:</p>
          <ul class="list-disc space-y-1 pl-5.5">
            <li>Ameisensäure</li>
            <li>Milchsäure</li>
            <li>Oxalsäure</li>
          </ul>
          <p>
            Diese Säuren sind für die Milben tödlich, werden von den Bienen bei korrekter Handhabung aber gut vertragen. So bleiben unsere Völker vital und leistungsfähig – Jahr für Jahr.
          </p>
          <p class="font-semibold text-highlighted">
            Der Einsatz von Medikamenten findet bei uns generell nicht statt.
          </p>
        </template>

        <template #konsistenz-body>
          <p>
            Honig wird flüssig aus der Bienenwabe geerntet. Er besteht aus etwa 80&nbsp;% Frucht- und Traubenzucker, 18&nbsp;% Wasser und rund 1&nbsp;% wertvollen Inhaltsstoffen wie Enzymen, Aminosäuren und Mineralstoffen.
          </p>
          <p>Ob Honig flüssig oder fest wird, hängt vom Mischverhältnis der Zucker ab:</p>
          <ul class="list-disc space-y-1 pl-5.5">
            <li>Hoher Traubenzuckeranteil → schnellere Kristallisation (fester Honig)</li>
            <li>Regelmäßiges, schonendes Rühren → fein verteilte Kristalle und cremige Konsistenz</li>
          </ul>
          <p>
            Unser cremig gerührter Honig bleibt dauerhaft streichzart – ideal fürs Frühstücksbrot. Flüssiger Honig eignet sich hervorragend zum Süßen von Tee oder Joghurt.
          </p>
          <p class="font-semibold text-highlighted">
            Geschmackssache – qualitativ sind beide Varianten gleichwertig.
          </p>
        </template>

        <template #honigschleuder-body>
          <p>
            Für ein Glas Honig fliegt eine Biene im Schnitt dreimal um die Welt. Jede Sammlerin besucht Hunderte von Blüten, nimmt den Nektar auf und übergibt ihn im Stock den Stockbienen. Diese reduzieren den Wassergehalt, reichern den Saft mit körpereigenen Enzymen an und lagern ihn als Wintervorrat in den Waben ein.
          </p>
          <p>
            Wir entnehmen Honig erst, wenn die Bienen mehr eingelagert haben, als sie selbst benötigen. So bleibt jedem Volk genug Nahrung für den Winter.
          </p>
          <p class="font-medium text-highlighted">
            Unser Weg vom Stock ins Glas:
          </p>
          <ol class="list-decimal space-y-1 pl-5.5">
            <li>Honig wird kalt aus der Wabe geschleudert</li>
            <li>Schonend gesiebt, um Wachsteilchen zu entfernen</li>
            <li>Bei Bedarf cremig gerührt</li>
            <li>Direkt in Gläser abgefüllt – ohne jegliche Zusätze</li>
          </ol>
          <p>
            Die Waben geben wir den Bienen zurück, damit sie neuen Honig einlagern können – nachhaltig und ressourcenschonend.
          </p>
        </template>

        <template #lagern-body>
          <p>Honig ist nahezu unbegrenzt haltbar – vorausgesetzt, er wird richtig gelagert. Dabei gilt:</p>
          <ul class="list-disc space-y-1 pl-5.5">
            <li>Kühl und trocken, idealerweise bei 10–18&nbsp;°C</li>
            <li>Dunkel lagern, da Licht den Geschmack beeinträchtigen kann</li>
            <li>Gut verschlossen halten – Honig nimmt sonst Feuchtigkeit und Fremdgerüche auf</li>
            <li>Nicht im Kühlschrank – dort kristallisiert er schneller und wird hart</li>
          </ul>
          <p>
            Flüssiger Honig kann mit der Zeit natürlich kristallisieren – ein Zeichen für echte Qualität, kein Qualitätsmangel. Bei Bedarf lässt er sich vorsichtig im Wasserbad bei maximal 40&nbsp;°C wieder flüssig machen.
          </p>
          <p class="font-semibold text-highlighted">
            Wichtig: Niemals in der Mikrowelle erhitzen – das zerstört wertvolle Enzyme und Aromen.
          </p>
        </template>

        <template #regional-body>
          <p>
            Unser Honig stammt ausschließlich aus dem Landkreis Regen und Straubing-Bogen im Bayerischen Wald. Sie wissen genau, wo Ihr Honig herkommt – und welche Blütenpracht unsere Bienen bestäubt haben.
          </p>
          <p class="font-medium text-highlighted">
            Vorteile von regionalem Honig:
          </p>
          <ul class="list-disc space-y-1 pl-5.5">
            <li>Kurze Wege vom Stock bis ins Glas</li>
            <li>Einzigartiger Geschmack durch heimische Blütenvielfalt</li>
            <li>Unterstützung lokaler Imker und heimischer Bienenvölker</li>
            <li>Keine Anreicherung oder Vermischung mit Import-Honig</li>
            <li>Schonende, handwerkliche Verarbeitung in kleiner Menge</li>
          </ul>
          <p>
            Regionaler Honig trägt zudem zur Bestäubung heimischer Pflanzen bei und stärkt die Biodiversität in unserer Region.
          </p>
        </template>

        <template #eu-honey-body>
          <p>
            Auf nahezu jedem Supermarkt- oder Discounter-Honig steht die Bezeichnung „Honig aus EU- und Nicht-EU-Ländern“. Dahinter verbirgt sich oft ein Blend aus Honigen verschiedenster Herkunft – teils aus mehreren Kontinenten gemischt, aufgeschmolzen und gefiltert.
          </p>
          <p class="font-medium text-highlighted">
            Was das für Sie bedeutet:
          </p>
          <ul class="list-disc space-y-1 pl-5.5">
            <li>Kein nachvollziehbarer Ursprung – Sie wissen nicht, woher der Honig wirklich stammt</li>
            <li>Stark erhitzte Verarbeitung kann Aromen und Inhaltsstoffe beeinträchtigen</li>
            <li>Einheitlicher, wenig charakteristischer Geschmack</li>
            <li>Kein direkter Bezug zu heimischen Bienen und Blüten</li>
          </ul>
          <p>
            Im Gegensatz dazu erhalten Sie bei uns echten Honig aus der Region – vom Imker direkt, ohne Umwege.
          </p>
          <a
            :href="sat1WarencheckUrl"
            target="_blank"
            rel="noopener"
            class="btn btn-ghost mt-1 justify-self-start"
          >
            <UIcon
              name="i-heroicons-play"
              class="size-5"
            />
            SAT.1 Warencheck ansehen
          </a>
        </template>

        <template #bienenwachs-body>
          <p>
            Bienenwachstücher sind eine natürliche, wiederverwendbare Alternative zu Frischhaltefolie und Alufolie. Sie bestehen aus Baumwollstoff, der mit Bienenwachs aus unserer eigenen Imkerei imprägniert wird.
          </p>
          <p class="font-medium text-highlighted">
            Einsatzmöglichkeiten:
          </p>
          <ul class="list-disc space-y-1 pl-5.5">
            <li>Obst, Gemüse, Käse und Brot frisch halten</li>
            <li>Schüsseln und Gläser abdecken</li>
            <li>Brotdosen und Lunchboxen auskleiden</li>
          </ul>
          <p class="font-medium text-highlighted">
            Pflege und Haltbarkeit:
          </p>
          <ul class="list-disc space-y-1 pl-5.5">
            <li>Mit kaltem bis handwarmem Wasser und mildem Spülmittel reinigen</li>
            <li>Nicht in der Spülmaschine oder Mikrowelle verwenden</li>
            <li>Bei Bedarf mit dem Bügeleisen auffrischen</li>
            <li>Hält bei guter Pflege bis zu einem Jahr</li>
          </ul>
          <p class="font-semibold text-highlighted">
            Nachhaltig, plastikfrei und direkt aus unserer Imkerei – in drei Größen oder als praktisches 3er-Set erhältlich.
          </p>
        </template>
      </UAccordion>
    </UContainer>
  </section>
</template>
