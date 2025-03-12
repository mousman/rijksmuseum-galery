<script setup lang="ts">
import type { ArtObject } from '@/gallery/types/gallery'
import { useFetchArtObject } from '@/gallery/composables/gallery'
import { getNearestZ, TILE_HEIGHT } from '@/gallery/composables/art-object'

const { artObject } = defineProps<{
  artObject: ArtObject
}>()

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
  <div v-if="isLoading" class="gallery-tile-loading">
    <MdiLoading class="g-loading__icon" />
  </div>
  <div v-else-if="isError || !data?.levels.length" class="gallery-tile-error">
    <MdiNoteOffOutline />
  </div>
  <Transition name="fade">
    <div v-if="data && imgSrc" class="gallery-tile">
      <figure>
        <img :src="imgSrc" class="gallery-tile__image" />
        <figcaption class="gallery-tile__title">{{ artObject.title }}</figcaption>
      </figure>
    </div>
  </Transition>
</template>
<style lang="scss">
.gallery-tile-error {
  font-size: 2rem;
  color: var(--color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: v-bind(cssTileHeight);
}

.gallery-tile-loading {
  color: var(--color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: v-bind(cssTileHeight);
}

.gallery-tile {
  position: relative;
  height: v-bind(cssTileHeight);
  background-color: var(--background-color);

  &__title {
    position: absolute;
    color: var(--color);
    font-size: 0.75rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background-color);
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    padding: 0.5rem 0.5rem 0.2rem 0.5rem;
    text-align: center;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
