import siteMetadata from '../siteMetadata'

/** Pfade relativ zur TwicPics-Quelle (privatimkerei-hoffmann.de) */
export const images = {
  bees: '/photos/flugloch.webp',
  gallery: {
    bayerischerWald: '/photos/bienenstand.webp',
    bienenWabe: '/photos/bienenwabe.webp',
    honigernte: '/photos/honigwabe.webp',
    imkerarbeit: '/photos/imkerarbeit.webp',
  },
  honey: '/honey.jpg',
  logo: '/logo-v2.1.png',
  me: '/me.jpg',
  products: {
    bienenwachstuecher: 'produkt-bienenwachstuecher.webp',
    honigCremig: '/photos/honig-cremig.webp',
    honigFluessig: '/photos/honig-fluessig.webp',
  },
  regional: '/regional.jpg',
  wissen: {
    bienen: '/photos/flugloch.webp',
    ernte: '/photos/honigwabe.webp',
    konsistenz: 'wissen/wissen-konsistenz.webp',
    lagerung: 'wissen/wissen-lagerung.webp',
  },
} as const

export function twicPicsUrl (path: string): string {
  return `${siteMetadata.twicPicsBaseUrl}${path}`
}
