import type { GalleryImageLevel } from '@/gallery/types/gallery'

export function getNearestZ(levels: GalleryImageLevel[], height: number) {
  const sortedLevelArray = [...levels].sort(
    (level1, level2) => Math.abs(height - level1.height) - Math.abs(height - level2.height),
  )

  return sortedLevelArray[0]
}
