import siteMetadata from '../siteMetadata'

/** Pfade relativ zur TwicPics-Quelle (privatimkerei-hoffmann.de) */
export const images = {
  bees: '/bees.jpg',
  gallery: {
    bayerischerWald: 'galerie-bayerischer-wald.webp',
    bienenWabe: 'galerie-bienen-wabe.webp',
    honigernte: 'galerie-honigernte.webp',
    imkerarbeit: 'galerie-imkerarbeit.webp',
  },
  honey: '/honey.jpg',
  logo: '/logo.png',
  me: '/me.jpg',
  products: {
    bienenwachstuecher: 'produkt-bienenwachstuecher.webp',
    honigCremig: 'produkt-honig-cremig.webp',
    honigFluessig: 'produkt-honig-fluessig.webp',
  },
  regional: '/regional.jpg',
  sat1Warencheck: '/sat1-warencheck.png',
  wissen: {
    bienen: 'wissen/wissen-bienen.webp',
    bienenwachs: 'wissen/wissen-bienenwachs.webp',
    ernte: 'wissen/wissen-ernte.webp',
    konsistenz: 'wissen/wissen-konsistenz.webp',
    lagerung: 'wissen/wissen-lagerung.webp',
    regional: 'wissen/wissen-regional.webp',
  },
} as const

export function twicPicsUrl (path: string): string {
  return `${siteMetadata.twicPicsBaseUrl}${path}`
}
