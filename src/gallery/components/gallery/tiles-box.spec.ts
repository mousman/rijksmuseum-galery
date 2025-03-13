import { flushPromises, shallowMount } from '@vue/test-utils'

import TilesBox from './tiles-box.vue'
import Tile from './tile.vue'
import LoadMoreTile from './load-more-tile.vue'
import Placeholder from './placeholder.vue'
import collectionResponse from '@/gallery/composables/__mocks__/collection.json'
import { useRoute } from 'vue-router'

vi.stubEnv(`VITE_API_KEY`, `myKey`)

const searchParams = {
  q: '',
  key: 'myKey',
  imgonly: 'true',
  s: 'relevance',
  ps: '20',
  p: '1',
}

vi.mock(`vue-router`, () => ({
  useRoute: vi.fn(() => ({ params: {}, query: { q: '' }, meta: {} })),
}))

describe('TilesBox', () => {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any*/
  it('renders with placeholder if no request made', async (context: any) => {
    context.mockGet('https://www.rijksmuseum.nl/api/en/collection/', {
      data: collectionResponse,
      searchParams,
    })

    const wrapper = shallowMount(TilesBox)
    await flushPromises()
    expect(wrapper.findComponent(Placeholder).exists()).toBe(true)
  })

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any*/
  it('renders with items', async (context: any) => {
    context.mockGet('https://www.rijksmuseum.nl/api/en/collection/', {
      data: collectionResponse,
      searchParams: { ...searchParams, q: 'painting' },
    })

    // @ts-expect-error  it's ok
    useRoute.mockImplementationOnce(() => ({
      params: {},
      query: { q: 'painting' },
      meta: {},
    }))

    const wrapper = shallowMount(TilesBox)

    const loading = wrapper.find('.gallery__loading')
    expect(loading.exists()).toBe(true)
    expect(loading.text()).toBe('Loading...')
    const loadingIcon = wrapper.find('.g-loading__icon')
    expect(loadingIcon.exists()).toBe(true)

    await flushPromises()
    expect(wrapper.findAllComponents(Tile)).toHaveLength(collectionResponse.artObjects.length)
    expect(wrapper.findComponent(Tile).props()).toMatchSnapshot()
    expect(wrapper.findComponent(LoadMoreTile)?.exists()).toBe(true)
  })

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any*/
  it('renders an error info', async (context: any) => {
    context.mockGet('https://www.rijksmuseum.nl/api/en/collection/', {
      data: collectionResponse,
      searchParams: { ...searchParams, q: 'painting' },
      statusCode: 403,
    })

    // @ts-expect-error  it's ok
    useRoute.mockImplementationOnce(() => ({
      params: {},
      query: { q: 'painting' },
      meta: {},
    }))

    const wrapper = shallowMount(TilesBox)
    await flushPromises()

    expect(wrapper.find('.gallery__error').exists()).toBe(true)
    expect(wrapper.find('.gallery__error').text()).toBe('It looks like something went wrong !')
  })
})
