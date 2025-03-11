import { RIJKS_CollectionAPI } from '@/gallery/services/gallery'
import type { GalleryResponse, GalleryImagesResponse } from '@/gallery/types/gallery'

const USE_FETCH_GALLERY = 'USE_FETCH_GALLERY'
const USE_FETCH_ARTOBJECT = 'USE_FETCH_ARTOBJECT'

export function useFetchGallery() {
  const searchParams = new URLSearchParams()
  searchParams.append('q', 'painting')
  searchParams.append('key', import.meta.env.VITE_API_KEY)
  searchParams.append('imgonly', 'true')
  searchParams.append('s', 'relevance')
  searchParams.append('ps', '20')

  return useInfiniteQuery({
    queryKey: [USE_FETCH_GALLERY],
    queryFn: async ({ pageParam }) => {
      console.log(pageParam)
      searchParams.delete('p')
      searchParams.append('p', pageParam.toString())
      const req = await RIJKS_CollectionAPI(`en/collection/`, {
        searchParams,
      }).json<GalleryResponse>()
      return req
    },
    getNextPageParam: (lastPage, _pages, lastPageParam) => {
      if (lastPage.artObjects.length < 20) {
        return undefined
      }
      return lastPageParam + 1
    },
    initialPageParam: 1,
    staleTime: 5_000,
    maxPages: 10,
  })
}

export function useFetchArtObject(id: Ref<string>) {
  const searchParams = new URLSearchParams()
  searchParams.append('key', import.meta.env.VITE_API_KEY)

  return useQuery({
    queryKey: [USE_FETCH_ARTOBJECT, id],
    queryFn: async () => {
      const req = await RIJKS_CollectionAPI(`en/collection/${id.value}/tiles`, {
        searchParams,
      }).json<GalleryImagesResponse>()
      return req
    },
    enabled: !!id.value,
    retry: 3,
  })
}
