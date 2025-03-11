export interface ArtObject {
  links: {
    self: string
    web: string
  }
  id: string
  objectNumber: string
  title: string
  hasImage: boolean
  principalOrFirstMaker: string
  longTitle: string
  showImage: boolean
  permitDownload: boolean
  webImage: {
    guid: string
    offsetPercentageX: number
    offsetPercentageY: number
    width: number
    height: number
    url: string
  }
  headerImage: {
    guid: string
    offsetPercentageX: boolean
    offsetPercentageY: boolean
    width: number
    height: number
    url: string
  }
  productionPlaces: string[]
}

export interface GalleryResponse {
  elapsedMilliseconds: number
  count: number
  countFacets: {
    hasimage: number
    ondisplay: number
  }
  artObjects: ArtObject[]
}

interface GalleryTile {
  x: number
  y: number
  url: string
}

export interface GalleryImageLevel {
  name: string
  width: number
  height: number
  tiles: GalleryTile[]
}

export interface GalleryImagesResponse {
  levels: GalleryImageLevel[]
}
