import ky from 'ky'

export const RIJKS_CollectionAPI = ky.create({
  prefixUrl: 'https://www.rijksmuseum.nl/api',
})

export const RIJKS_ImageAPI = ky.create({
  prefixUrl: 'https://iiif.micr.io',
})
