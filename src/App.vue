<script setup lang="ts">
import { applyDefaultTheme } from '@/appp/composables/theme'
onMounted(() => {
  applyDefaultTheme()
})
</script>
<template>
  <RouterView></RouterView>
</template>
