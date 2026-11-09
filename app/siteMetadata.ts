export interface Location {
  district: string
  locality: string
  mapsQuery: string
  name: string
  postalCode: string
  region: string
  street: string
}

const locations: Array<Location> = [
  {
    district: 'Landkreis Regen',
    locality: 'Prackenbach',
    mapsQuery: 'Pfarrhofstraße+7,94267+Prackenbach',
    name: 'Renate Hoffmann',
    postalCode: '94267',
    region: 'Bayern',
    street: 'Pfarrhofstraße 7',
  },
  {
    district: 'Landkreis Straubing-Bogen',
    locality: 'Rattenberg',
    mapsQuery: 'Siegersdorf+18,94371+Rattenberg',
    name: 'Michael Hoffmann',
    postalCode: '94371',
    region: 'Bayern',
    street: 'Siegersdorf 18',
  },
]

const primaryLocation = locations[0]!

const phone = '09944/2283'

const siteMetadata = {
  address: {
    locality: primaryLocation.locality,
    postalCode: primaryLocation.postalCode,
    region: primaryLocation.region,
    street: primaryLocation.street,
  },
  description: 'Privatimkerei Hoffmann im Bayerischen Wald. Renate Hoffmann und ihr Sohn Michael sind zwei Hobby-Imker, die ihre Familientradition in ihrer Freizeit weiterführen – in Prackenbach und Rattenberg. Die Imkertradition geht in unserer Familie bis in das Jahr 1890 zurück.',
  email: 'kontakt@privatimkerei-hoffmann.de',
  foundingYear: 1890,
  instagramHandle: '@privatimkerei.hoffmann',
  instagramUrl: 'https://www.instagram.com/privatimkerei.hoffmann/',
  locations,
  phone,
  phoneDisplay: phone.replace('/', ' / '),
  phoneHref: `tel:${phone.replace(/\D/g, '')}`,
  title: 'Privatimkerei Hoffmann',
  twicPicsBaseUrl: 'https://mokkapps.twic.pics/privatimkerei-hoffmann.de',
  url: 'https://privatimkerei-hoffmann.de',
}

export function googleMapsSearchUrl (mapsQuery: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`
}

export default siteMetadata
