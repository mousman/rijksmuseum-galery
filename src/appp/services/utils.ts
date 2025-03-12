export function useURLSearchParams(params: Record<string, string | number | boolean>) {
  const searchParams = new URLSearchParams()
  const entries = Object.entries(params)
  for (const [key, value] of entries) {
    searchParams.append(key, value.toString())
  }

  return searchParams
}
