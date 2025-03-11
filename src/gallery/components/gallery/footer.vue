<script setup lang="ts">
import { useFetchGallery } from '@/gallery/composables/gallery'

const { fetchNextPage, hasNextPage, isFetchingNextPage } = useFetchGallery()
</script>
<template>
  <div class="gallery-footer">
    <button @click="() => fetchNextPage()" :disabled="!hasNextPage || isFetchingNextPage">
      load more
    </button>
  </div>
</template>
<style lang="scss">
.gallery-footer {
  height: var(--gallery-footer-height);
}
</style>
