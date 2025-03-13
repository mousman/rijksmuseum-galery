import { http, HttpResponse } from 'msw'
import { SetupServerApi } from 'msw/node'
// import chalk from 'chalk'

/* eslint-disable @typescript-eslint/no-explicit-any*/
export interface MockOptions {
  statusCode?: number
  data?: Record<string, any> | string
  searchParams?: Record<string, any>
}
/* eslint-enable */

export function createMock(server: SetupServerApi, method: keyof typeof http) {
  const httpMethod = http[method]
  return (path: string, { data, statusCode = 200, searchParams }: MockOptions = {}) => {
    const url = new URL(path, `http://localhost`)

    // const debugPath = url.toString()
    // console.info(`📡 MOCK `, debugPath)
    // console.info(
    //   `   `,
    //   statusCode,
    //   chalk.cyan(` ${method}`.toUpperCase()),
    //   path.replace(/^\//, ``),
    //   searchParams ?? {},
    // )

    server.use(
      httpMethod(
        String(url),
        async ({ request }) => {
          const reqUrl = new URL(request.url)
          const sorted = [...reqUrl.searchParams.entries()].toSorted()
          if (searchParams) {
            const _params = new URLSearchParams()
            Object.entries(searchParams).forEach(([name, value]) => {
              _params.append(name, value)
            })
            const _sorted = [..._params.entries()].toSorted()
            const isSameQueryParam = _sorted.every(
              ([key, value], index) =>
                sorted?.[index]?.[0] === key && sorted?.[index]?.[1] === value,
            )

            if (!isSameQueryParam) {
              console.warn(`QUERY PARAMS MISMATCH`, {
                expected: _sorted,
                received: sorted,
              })
              return HttpResponse.json(data, { status: 404 })
            }
          }

          return HttpResponse.json(data, { status: statusCode })
        },
        { once: true },
      ),
    )
  }
}
