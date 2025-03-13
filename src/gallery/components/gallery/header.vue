<script setup lang="ts">
import { switchTheme } from '@/appp/composables/theme'
defineOptions({
  name: `GalleryHeader`,
})
</script>
<template>
  <header class="rm-header">
    <span class="rm-header__content"> RIJKS MUSEUM TOUR </span>
    <button @click="switchTheme" class="rm-header__button">Switch theme</button>
  </header>
</template>
<style lang="scss">
.rm-header {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--background-color);
  height: var(--header-height);
  text-align: center;
  font-weight: bold;
  color: var(--color);

  &__button {
    cursor: pointer;
    padding: 0.5rem 1rem;
  }
}
</style>
