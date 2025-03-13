import { shallowMount } from '@vue/test-utils'
import Searchbar from './searchbar.vue'

vi.mock(`vue-router`, () => ({
  useRouter: vi.fn().mockReturnValue({ push: vi.fn() }),
}))

const routerPushSpy = useRouter().push

describe('Searchbar', () => {
  it('renders', () => {
    const wrapper = shallowMount(Searchbar)
    const form = wrapper.find('form')
    expect(form.exists()).toBe(true)
    expect(form.find('input').exists()).toBe(true)
    expect(form.find('button').exists()).toBe(true)
  })

  it('set a query param', async () => {
    const wrapper = shallowMount(Searchbar)
    await wrapper.find('input').setValue('painting')
    await wrapper.find('form').trigger('submit.prevent')

    expect(routerPushSpy).toHaveBeenCalledWith({
      query: {
        q: 'painting',
      },
    })
  })
})
