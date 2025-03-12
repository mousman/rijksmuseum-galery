<script setup lang="ts">
import { useFetchGallery } from '@/gallery/composables/gallery'
const route = useRoute()
const searchRef = toRef(() => route.query.q?.toString() ?? '')

const { isError, error, isLoading, data: gallery } = useFetchGallery(searchRef)
</script>

<template>
  <div class="gallery">
    <span v-if="isLoading">Loading...</span>
    <span v-else-if="isError">Error : {{ error?.message }}</span>
    <GalleryPlaceholder v-else-if="!gallery?.pages" />
    <ul v-else-if="gallery" class="gallery-container" role="list">
      <template v-for="(galleryPage, index) in gallery.pages" :key="index">
        <li
          v-for="artObject in galleryPage.artObjects"
          :key="artObject.id"
          class="gallery-container__art-object"
        >
          <GalleryTile :art-object="artObject" />
        </li>
      </template>
      <li>
        <GalleryLoadMoreTile />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.gallery {
  margin-top: 1rem;
}

.gallery-container {
  --min-tile-width: 200px;
  margin-bottom: 2rem;
  margin: 0 10rem;

  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(var(--min-tile-width), 1fr));
}
</style>
