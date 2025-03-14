import type { SetupServerApi } from 'msw/node'
import type { MockOptions } from './mock-requests'
import type { TestContext } from './se'

declare module 'vitest' {
  export interface TestContext {
    mockGet: (url: string, mockOptions?: MockOptions) => void
  }
}
