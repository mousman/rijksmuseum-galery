<script setup lang="ts">
import { useFetchGallery } from '@/gallery/composables/gallery'

const { isError, isLoading, data } = useFetchGallery()
</script>

<template>
  <GalleryHeader />
  <main>gallery</main>

  <pre>
    {{ isError }}
  </pre>

  <pre>
    {{ isLoading }}
  </pre>
  <pre v-if="data">
    {{ data }}
  </pre>
</template>

<style></style>
