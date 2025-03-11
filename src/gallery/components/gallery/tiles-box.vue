<script setup lang="ts">
import { useFetchGallery } from '@/gallery/composables/gallery'

const { isError, error, isPending, data: gallery } = useFetchGallery()
</script>

<template>
  gallery
  <span v-if="isPending">Loading...</span>
  <span v-else-if="isError">Error : {{ error?.message }}</span>
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
  </ul>
</template>

<style lang="scss">
.gallery-container {
  list-style: none;
  margin-bottom: 2rem;
  margin: 0 10rem;
  padding: 0;
  --min-tile-width: 200px;

  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(var(--min-tile-width), 1fr));
}
</style>
