<script setup lang="ts">
import { useFetchGallery } from '@/gallery/composables/gallery'
import { TILE_HEIGHT } from '@/gallery/composables/art-object'

const route = useRoute()
const searchRef = toRef(() => route.query.q?.toString() ?? '')

const { fetchNextPage, hasNextPage, isFetchingNextPage } = useFetchGallery(searchRef)

const cssTileHeight = computed(() => `${TILE_HEIGHT}px`)
console.log(cssTileHeight.value)
</script>
<template>
  <div class="gallery-load-more">
    <button
      class="gallery-load-more__button"
      @click="() => fetchNextPage()"
      :disabled="!hasNextPage || isFetchingNextPage"
    >
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
    padding: 1rem 0;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>
