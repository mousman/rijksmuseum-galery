import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Footer from './footer.vue'

describe('Footer', () => {
  it('renders', () => {
    const wrapper = shallowMount(Footer)
    const link = wrapper.find('a')
    expect(link.exists()).toBe(true)
    expect(link.attributes('href')).toBe('https://www.rijksmuseum.nl/nl')
    expect(link.text()).toBe('Rijksmuseum website')
  })
})
