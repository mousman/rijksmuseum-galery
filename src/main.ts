import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { createApp } from 'vue'
import App from './App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin, {
  queryClientConfig: {
    defaultOptions: {
      queries: { retry: false, staleTime: 0 },
      mutations: { retry: false },
    },
  },
})

app.mount('#app')
