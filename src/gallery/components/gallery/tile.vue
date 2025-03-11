<script setup lang="ts">
import type { ArtObject } from '@/gallery/types/gallery'
import { useFetchArtObject } from '@/gallery/composables/gallery'
import { getNearestZ } from '@/gallery/composables/art-object'

const { artObject } = defineProps<{
  artObject: ArtObject
}>()

const TILE_HEIGHT = 180
const cssTileHeight = computed(() => `${TILE_HEIGHT}px`)

const artOjbectId = toRef(artObject.objectNumber)

const { isLoading, data, isError } = useFetchArtObject(artOjbectId)
const imgSrc = computed(() => {
  if (!data.value) return ''
  const level = getNearestZ(data.value.levels, TILE_HEIGHT)
  return level.tiles[0].url ?? ''
})
</script>
<template>
  <span v-if="isLoading">loading</span>
  <span v-else-if="isError">error</span>
  <div v-else-if="data" class="gallery-tile">
    <img v-if="imgSrc" :src="imgSrc" class="gallery-tile__image" />
    <div class="gallery-tile__title">{{ artObject.title }}</div>
  </div>
</template>
<style lang="scss">
.gallery-tile {
  position: relative;
  height: v-bind(cssTileHeight);
  background-color: var(--background-color);

  &__title {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background-color);
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    padding: 0 0.5rem;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
}
</style>
