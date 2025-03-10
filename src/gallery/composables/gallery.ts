import { RIJKS_CollectionAPI } from '@/gallery/services/gallery'

const USE_FETCH_GALLERY = 'USE_FETCH_GALLERY'

export function useFetchGallery() {
  const searchParams = new URLSearchParams()
  searchParams.append('q', 'Rembrandt')
  searchParams.append('key', import.meta.env.VITE_API_KEY)

  return useQuery({
    queryKey: [USE_FETCH_GALLERY],
    queryFn: async () => {
      const req = await RIJKS_CollectionAPI(`en/collection/`, { searchParams }).json()
      return req
    },
  })
}
