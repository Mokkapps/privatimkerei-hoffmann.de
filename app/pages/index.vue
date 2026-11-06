<script setup lang="ts">
import { twicPicsUrl } from '~/data/images'
import { products } from '~/data/products'
import siteMetadata from '~/siteMetadata'

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
    <HomeHero />
    <HomeFacts />
    <HomePrinciples />
    <HomeProducts />
    <HomeFamily />
    <HomeKnowledge />
    <HomeGallery />
    <HomeContact />
  </div>
</template>
