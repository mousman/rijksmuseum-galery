import { fileURLToPath, URL } from 'node:url'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import fg from 'fast-glob'

const componentDirs = fg.globSync(`src/**/components/`, { onlyFiles: false })
const pageDirs = fg.globSync(`src/**/pages/`, { onlyFiles: false })
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      routesFolder: pageDirs,
    }),
    vue(),
    vueDevTools(),
    AutoImport({
      imports: [
        'vue',
        VueRouterAutoImports,
        {
          '@tanstack/vue-query': [
            `useQuery`,
            `useQueries`,
            `useMutation`,
            `useQueryClient`,
            `useIsFetching`,
            `useInfiniteQuery`,
          ],
        },
      ],
      dts: true,
    }),
    Components({
      dirs: componentDirs,
      directoryAsNamespace: true,
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  envDir: `./environments`,
})
