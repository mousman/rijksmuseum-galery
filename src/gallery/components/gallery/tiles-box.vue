<script setup lang="ts">
import { useFetchGallery } from '@/gallery/composables/gallery'
const route = useRoute()
const searchRef = toRef(() => route.query.q?.toString() ?? '')

const { isError, isLoading, data: gallery } = useFetchGallery(searchRef)
</script>

<template>
  <div class="gallery">
    <div v-if="isLoading" class="gallery__loading g-loading">
      <div>Loading...</div>
      <MdiLoading class="g-loading__icon" />
    </div>
    <div v-else-if="isError" class="gallery__error">It looks like something went wrong !</div>
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

  &__loading {
    margin-top: 3rem;
    color: var(--primary-color);
    text-align: center;
  }
  &__error {
    margin-top: 3rem;
    color: var(--primary-color);
    text-align: center;
  }
}

.gallery-container {
  --min-tile-width: 200px;
  margin: 6rem 10rem 0;

  display: grid;
  column-gap: 1rem;
  row-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(var(--min-tile-width), 1fr));

  &__art-object {
    position: relative;
  }
}

.g-loading__icon {
  margin-top: 1rem;
  font-size: 2rem;
}
</style>
