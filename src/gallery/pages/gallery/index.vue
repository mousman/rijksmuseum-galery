<script setup lang="ts"></script>

<template>
  <GalleryHeader />
  <main class="gallery-main">
    <GallerySearchbar />
    <GalleryTilesBox />
  </main>
  <GalleryFooter />
</template>

<style lang="scss">
.gallery-main {
  margin-top: calc(var(--header-height) + 2rem);
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
}
</style>
