<script setup lang="ts">
import { useFetchGallery } from '@/gallery/composables/gallery'
import { TILE_HEIGHT } from '@/gallery/composables/art-object'

defineOptions({
  name: `GalleryLoadMoreTile`,
})

const route = useRoute()
const searchRef = toRef(() => route.query.q?.toString() ?? '')

const { fetchNextPage, hasNextPage, isFetchingNextPage } = useFetchGallery(searchRef)

function onClick() {
  fetchNextPage()
}

const cssTileHeight = computed(() => `${TILE_HEIGHT}px`)
</script>
<template>
  <div class="gallery-load-more">
    <button
      class="gallery-load-more__button"
      @click="onClick"
      :disabled="!hasNextPage || isFetchingNextPage"
    >
      <div v-if="isFetchingNextPage"><MdiLoading class="g-loading__icon" /></div>
      load more
    </button>
  </div>
</template>
<style lang="scss">
.gallery-load-more {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: v-bind(cssTileHeight);
  background-color: var(--background-color);
  padding: 0 2rem;

  &__button {
    height: 75%;
    padding: 1rem 0;
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
    border: none;
    color: var(--primary-color);
    background-color: var(--tertiary-color);
  }
}
</style>
