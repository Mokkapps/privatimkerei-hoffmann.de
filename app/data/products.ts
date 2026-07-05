export interface ProductVariant {
  label: string
  price: number
}

export interface Product {
  badge?: string
  description: string
  details: Array<string>
  id: string
  image: string
  imageAlt: string
  name: string
  variants: Array<ProductVariant>
}

// Preise zentral pflegen – Änderungen wirken sich automatisch auf
// Produktkarten und Schema.org-Produktdaten aus.
// TODO: Preise mit Renate abstimmen (aktuell marktübliche Richtwerte).
export const products: Array<Product> = [
  {
    badge: 'Nettegold',
    description: 'Kalt geschleudert, gesiebt und direkt ins Glas abgefüllt – ein reines Naturprodukt ohne Zusätze aus dem Bayerischen Wald.',
    details: [
      '100% regional aus dem Landkreis Regen & Straubing-Bogen',
      'Kalt geschleudert und schonend verarbeitet',
      'Ohne jegliche Zusätze',
    ],
    id: 'honig-fluessig',
    image: '/images/produkt-honig-fluessig.webp',
    imageAlt: 'Glas mit flüssigem, goldenem Honig und Honiglöffel auf einem Holztisch',
    name: 'Flüssiger Honig',
    variants: [
      { label: '500 g Glas', price: 7.5 },
      { label: '250 g Glas', price: 4.5 },
    ],
  },
  {
    badge: 'Nettegold',
    description: 'Durch regelmäßiges, schonendes Rühren wird der Honig herrlich cremig und bleibt dauerhaft streichzart – perfekt fürs Frühstücksbrot.',
    details: [
      'Fein-cremig gerührt, bleibt dauerhaft streichfähig',
      'Gleiche erstklassige Qualität wie flüssiger Honig',
      'Ideal als Brotaufstrich',
    ],
    id: 'honig-cremig',
    image: '/images/produkt-honig-cremig.webp',
    imageAlt: 'Geöffnetes Glas mit cremig gerührtem Honig und Holzlöffel',
    name: 'Cremig gerührter Honig',
    variants: [
      { label: '500 g Glas', price: 7.5 },
      { label: '250 g Glas', price: 4.5 },
    ],
  },
  {
    description: 'Die nachhaltige, wiederverwendbare Alternative zur Frischhaltefolie – aus Baumwolle und Bienenwachs aus der eigenen Imkerei.',
    details: [
      'Für Obst, Gemüse, Käse und Brot sowie zum Abdecken von Schüsseln',
      'Wiederverwendbar, hält bis zu einem Jahr',
      'Einfach mit kaltem bis handwarmem Wasser reinigen',
    ],
    id: 'bienenwachstuecher',
    image: '/images/produkt-bienenwachstuecher.webp',
    imageAlt: 'Bienenwachstücher mit Bienenmuster, eines davon deckt eine Glasschüssel ab',
    name: 'Bienenwachstücher',
    variants: [
      { label: 'Größe S (ca. 20×20 cm)', price: 5 },
      { label: 'Größe M (ca. 25×25 cm)', price: 7 },
      { label: 'Größe L (ca. 30×30 cm)', price: 9 },
      { label: '3er-Set (S, M, L)', price: 18 },
    ],
  },
]

export function formatPrice (price: number): string {
  return new Intl.NumberFormat('de-DE', { currency: 'EUR', style: 'currency' }).format(price)
}
