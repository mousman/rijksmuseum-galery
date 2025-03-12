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
    <div class="gallery-searchbar__content">
      <label for="search" class="gallery-searchbar__label">Search :</label>
      <input id="search" v-model="search" type="text" required class="gallery-searchbar__input" />
    </div>

    <button type="submit" class="gallery-searchbar__submit">SUBMIT</button>
  </form>
</template>
<style lang="scss">
.gallery-searchbar {
  margin-bottom: 2rem;
  display: flex;
  align-items: stretch;
  gap: 0.5rem;
  justify-content: center;

  &__content {
    display: flex;
    align-items: stretch;
  }

  &__label {
    color: var(--color);
    line-height: 2;
  }

  &__input {
    padding: 0.25rem 1rem;
  }

  &__submit {
    padding: 0.5rem 2rem;
    color: var(--primary-color);
    background-color: var(--background-color);
    cursor: pointer;
  }
}
</style>
