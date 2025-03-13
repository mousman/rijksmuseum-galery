import { shallowMount } from '@vue/test-utils'
import Placeholder from './placeholder.vue'

describe('Placeholder', () => {
  it('renders', () => {
    const wrapper = shallowMount(Placeholder)
    expect(wrapper.find('.gallery-description').exists()).toBe(true)
    expect(wrapper.find('.gallery-description__title')?.text()).toBe(
      'Explore digitized masterpieces.',
    )
    expect(wrapper.find('.gallery-description__text')?.text()).toBe(
      'Enter what you would like to see in the search bar.',
    )
    expect(wrapper.find('.gallery-description__mention')?.text()).toBe(
      'provided by RIJKS MUSEUM API',
    )
    expect(wrapper.find('.gallery-description__link')?.attributes('href')).toBe(
      'https://www.rijksmuseum.nl/nl',
    )
    expect(wrapper.find('.gallery-description__link')?.text()).toBe(
      'Visit the RIJKS MUSEUM website',
    )
  })
})
