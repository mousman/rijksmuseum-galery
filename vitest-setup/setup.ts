import { config } from '@vue/test-utils'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { afterAll, afterEach, beforeAll, beforeEach, vi } from 'vitest'
import { setupServer } from 'msw/node'
import { createMock } from './mock-requests'
// import chalk from 'chalk'
import type { VueQueryPluginOptions } from '@tanstack/vue-query'

interface TestContext {
  mockGet?: ReturnType<typeof createMock>
}

import { enableAutoUnmount } from '@vue/test-utils'
enableAutoUnmount(afterEach)

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        staleTime: 0,
        retry: false,
        refetchInterval: 0,
        gcTime: Number.POSITIVE_INFINITY,
        retryOnMount: false,
      },
    },
  },
}
config.global.plugins.push([VueQueryPlugin, vueQueryPluginOptions])

const server = setupServer()
const mockGet = createMock(server, `get`)

// server.events.on(`request:start`, ({ request }) => {
//   console.info(`🔚 DONE `, chalk.blue(request.method), request.url)
// })

beforeEach<TestContext>((context) => {
  context.mockGet = mockGet
})

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: `error` }))
// Close server after all tests
afterAll(() => {
  server.close()
  vi.resetAllMocks()
})

// Reset handlers after each test for test isolation
afterEach(() => {
  vi.clearAllMocks()
  server.resetHandlers()
  vi.useRealTimers()
})
