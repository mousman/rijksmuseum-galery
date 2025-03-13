import { shallowMount } from '@vue/test-utils'
import Index from './index.vue'
import Header from '@/gallery/components/gallery/header.vue'
import Searchbar from '@/gallery/components/gallery/searchbar.vue'
import TilesBox from '@/gallery/components/gallery/tiles-box.vue'
import Footer from '@/gallery/components/gallery/footer.vue'

describe('gallery index page', () => {
  it('renders', () => {
    const wrapper = shallowMount(Index)
    expect(wrapper.findComponent(Header).exists()).toBe(true)
    expect(wrapper.findComponent(Searchbar).exists()).toBe(true)
    expect(wrapper.findComponent(TilesBox).exists()).toBe(true)
    expect(wrapper.findComponent(Footer).exists()).toBe(true)
  })
})
