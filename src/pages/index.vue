<script setup lang="ts"></script>

<template>
  <main class="gallery-home">
    <GalleryHeader />
    <h1 class="gallery-home__title">Welcome to the RIJKS MUSEUM explorer</h1>
    <div class="gallery-home__description">
      Take a look at the wonders contained in the Rijks Museum's database and enjoy its masterpieces
      !
    </div>
    <RouterLink class="gallery-home__link" to="/gallery"> Visit the gallery </RouterLink>
  </main>
</template>

<style lang="scss">
.gallery-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(var(--header-height));

  &__title {
    font-size: 3rem;
    text-align: center;
    margin-top: 8rem;
    color: var(--primary-color);
  }

  &__description {
    margin-top: 1rem;
    font-size: 1.5rem;
    text-align: center;
    color: var(--primary-color);
  }

  &__link {
    margin-top: 6rem;
    color: var(--primary-color);
    background-color: var(--tertiary-color);
    padding: 2rem;
    opacity: 1;
  }
}
</style>
