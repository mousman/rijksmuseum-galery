<script setup lang="ts">
import { ref } from 'vue'
const router = useRouter()
const search = ref<string>('')

const handleSubmit = () => {
  router.push({ query: { q: search.value } })
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="gallery-searchbar">
    <input
      aria-label="Search"
      id="search"
      v-model="search"
      type="text"
      required
      class="gallery-searchbar__input"
    />

    <button type="submit" class="gallery-searchbar__submit">
      <mdi-search />
    </button>
  </form>
</template>
<style lang="scss">
.gallery-searchbar {
  margin-bottom: 2rem;
  display: flex;
  align-items: stretch;
  gap: 0.5rem;
  justify-content: center;

  &__input {
    padding: 0.25rem 1rem;
  }

  &__submit {
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    color: var(--primary-color);
    background-color: var(--background-color);
    cursor: pointer;
    opacity: 1;
    transition: 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
