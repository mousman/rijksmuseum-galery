<template>
  <main class="gallery-404">
    <GalleryHeader />
    <h1 class="gallery-404__title">404</h1>
    <div class="gallery-404__description">
      We couldn’t find that page, please check the URL and try again.
    </div>
    <RouterLink class="gallery-404__link" to="/">Home page</RouterLink>
  </main>
</template>

<style lang="scss">
.gallery-404 {
  color: var(--primary-color);
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
