import type { MockOptions } from './mock-requests'

declare module 'vitest' {
  export interface TestContext {
    mockGet: (url: string, mockOptions?: MockOptions) => void
  }
}
