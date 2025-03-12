import { RIJKS_CollectionAPI } from '@/gallery/services/gallery'
import type { GalleryResponse, GalleryImagesResponse } from '@/gallery/types/gallery'

const USE_FETCH_GALLERY = 'USE_FETCH_GALLERY'
const USE_FETCH_ARTOBJECT = 'USE_FETCH_ARTOBJECT'

export function useFetchGallery(search: Ref<string | undefined>) {
  const searchParams = new URLSearchParams()
  searchParams.append('key', import.meta.env.VITE_API_KEY)
  searchParams.append('imgonly', 'true')
  searchParams.append('s', 'relevance')
  searchParams.append('ps', '20')

  const enabled = computed(() => search.value !== ``)

  return useInfiniteQuery({
    queryKey: [USE_FETCH_GALLERY, search],
    queryFn: async ({ pageParam }) => {
      searchParams.delete('q')
      searchParams.append('q', search?.value ?? '')
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
    enabled,
  })
}

export function useFetchArtObject(id: Ref<string>) {
  const searchParams = new URLSearchParams()
  searchParams.append('key', import.meta.env.VITE_API_KEY)

  const enabled = computed(() => !!id.value)

  return useQuery({
    queryKey: [USE_FETCH_ARTOBJECT, id],
    queryFn: async () => {
      const req = await RIJKS_CollectionAPI(`en/collection/${id.value}/tiles`, {
        searchParams,
      }).json<GalleryImagesResponse>()
      return req
    },
    enabled,
    retry: 3,
  })
}
