<script setup lang="ts">
defineOptions({
  name: `GalleryPlaceholder`,
})
</script>
<template>
  <div class="gallery-description">
    <div class="gallery-description__title">Explore digitized masterpieces.</div>
    <div class="gallery-description__text">Enter what you would like to see in the search bar.</div>
    <div class="gallery-description__mention">
      <span>provided by </span>RIJKS MUSEUM<span> API</span>
    </div>
    <a class="gallery-description__link" href="https://www.rijksmuseum.nl/nl"
      >Visit the RIJKS MUSEUM website</a
    >
  </div>
</template>
<style lang="scss">
.gallery-description {
  margin: 6rem auto 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: var(--color);
  font-size: bold;

  &__title {
    font-size: 3rem;
    line-height: 2;
  }

  &__text {
    font-size: 2rem;
  }

  &__mention {
    font-size: 1.3rem;
    line-height: 2;
  }

  &__link {
    margin-top: 1.5rem;
    font-size: 1rem;
    color: var(--tertiary-color);

    &:visited {
      color: var(--tertiary-color);
    }
  }
}
</style>
