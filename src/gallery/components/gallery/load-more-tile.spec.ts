import { shallowMount, flushPromises } from '@vue/test-utils'
import LoadMoreTile from './load-more-tile.vue'
import collectionResponse from '@/gallery/composables/__mocks__/collection.json'

vi.stubEnv(`VITE_API_KEY`, `myKey`)

const searchParams = {
  q: 'painting',
  key: 'myKey',
  imgonly: 'true',
  s: 'relevance',
  ps: '20',
  p: '1',
}

vi.mock(`vue-router`, () => ({
  useRoute: vi.fn(() => ({ params: {}, query: { q: 'painting' }, meta: {} })),
}))

describe('LoadMoreTile', () => {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any*/
  it('renders', async (context: any) => {
    context.mockGet('https://www.rijksmuseum.nl/api/en/collection/', {
      data: collectionResponse,
      searchParams,
    })
    const wrapper = shallowMount(LoadMoreTile)
    await flushPromises()
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    expect(button.text()).toBe('load more')
    expect(wrapper.find('.g-loading__icon').exists()).toBe(false)
  })

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any*/
  it('requests a new set of art objects', async (context: any) => {
    context.mockGet('https://www.rijksmuseum.nl/api/en/collection/', {
      data: collectionResponse,
      searchParams,
    })

    const wrapper = shallowMount(LoadMoreTile)
    await flushPromises()

    context.mockGet('https://www.rijksmuseum.nl/api/en/collection/', {
      data: collectionResponse,
      searchParams: { ...searchParams, p: '2' },
    })
    let button = wrapper.find('button')
    await button.trigger('click')
    button = wrapper.find('button')
    expect(button.find('.g-loading__icon').exists()).toBe(true)
    await flushPromises()
    expect(button.find('.g-loading__icon').exists()).toBe(false)
  })
})
