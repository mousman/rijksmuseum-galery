import { shallowMount } from '@vue/test-utils'
import { applyDefaultTheme } from '@/appp/composables/theme'

import Header from './header.vue'

describe('Header', () => {
  it('renders', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.find('.rm-header__content').exists()).toBe(true)
    expect(wrapper.find('.rm-header__content').text()).toBe('RIJKS MUSEUM TOUR')
    expect(wrapper.find('.rm-header__button').exists()).toBe(true)
    expect(wrapper.find('.rm-header__button').text()).toBe('Switch theme')
  })

  it('switch theme', async () => {
    applyDefaultTheme()
    const wrapper = shallowMount(Header)
    await wrapper.find('.rm-header__button').trigger('click')
    expect(document.body.classList.contains('theme-retro')).toBe(true)
  })
})
