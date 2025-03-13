<script setup lang="ts">
defineOptions({
  name: `GalleryFooter`,
})
</script>
<template>
  <div class="gallery-footer">
    <a href="https://www.rijksmuseum.nl/nl">Rijksmuseum website</a>
  </div>
</template>
<style lang="scss">
.gallery-footer {
  height: var(--gallery-footer-height);
  background-color: var(--background-color);
  display: flex;
  color: black;
  margin-top: 1rem;
  padding: 1rem;

  &:active {
    color: black;
  }
}
</style>
