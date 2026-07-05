export interface Location {
  locality: string
  mapsQuery: string
  name: string
  postalCode: string
  region: string
  street: string
}

const locations: Array<Location> = [
  {
    locality: 'Prackenbach',
    mapsQuery: 'Pfarrhofstraße+7,94267+Prackenbach',
    name: 'Renate Hoffmann',
    postalCode: '94267',
    region: 'Bayern',
    street: 'Pfarrhofstraße 7',
  },
  {
    locality: 'Rattenberg',
    mapsQuery: 'Siegersdorf+18,94371+Rattenberg',
    name: 'Michael Hoffmann',
    postalCode: '94371',
    region: 'Bayern',
    street: 'Siegersdorf 18',
  },
]

const siteMetadata = {
  address: {
    locality: locations[0].locality,
    postalCode: locations[0].postalCode,
    region: locations[0].region,
    street: locations[0].street,
  },
  description: 'Privatimkerei Hoffmann im Bayerischen Wald. Die Imkerei wird von Renate Hoffmann und ihrem Sohn Michael Hoffmann als Familienbetrieb geführt – an zwei Standorten in Prackenbach und Rattenberg. Die Imkertradition geht in unserer Familie bis in das Jahr 1890 zurück.',
  email: 'kontakt@privatimkerei-hoffmann.de',
  // TODO: Instagram-Handle bestätigen und ggf. hier anpassen
  instagramUrl: 'https://www.instagram.com/privatimkerei.hoffmann/',
  locations,
  phone: '09944/2283',
  title: 'Privatimkerei Hoffmann',
  twicPicsBaseUrl: 'https://mokkapps.twic.pics/privatimkerei-hoffmann.de',
  url: 'https://privatimkerei-hoffmann.de',
}

export default siteMetadata
