import { flushPromises, shallowMount } from '@vue/test-utils'

import Tile from './tile.vue'
import artObject from '@/gallery/composables/__mocks__/art-object.json'
import tiles from '@/gallery/composables/__mocks__/tiles.json'

vi.stubEnv(`VITE_API_KEY`, `myKey`)

const searchParams = { key: 'myKey' }

describe('Tile', () => {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any*/
  it('renders', async (context: any) => {
    context.mockGet(
      `https://www.rijksmuseum.nl/api/en/collection/${artObject.objectNumber}/tiles`,
      { data: tiles, searchParams },
    )
    const wrapper = shallowMount(Tile, { props: { artObject } })
    expect(wrapper.find('.g-loading__icon').exists()).toBe(true)
    await flushPromises()

    expect(wrapper.find('.g-loading__icon').exists()).toBe(false)
    expect(wrapper.find('img')?.attributes('src')).toBe(
      'http://lh3.googleusercontent.com/Ak7kMrJM4QhEv46tWaUM2YL84ZCRQ2-53RXva-FVSJcLM34-C3J5oFGCsyec5fCIiBhbcWfV0w6tqHUz12QI7Sh_8ULL=s0',
    )
    expect(wrapper.find('figcaption')?.text()).toBe('Portrait of Alida Christina Assink')
  })
})
