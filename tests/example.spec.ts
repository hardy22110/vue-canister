import { shallowMount } from '@vue/test-utils'
import ExampleButton from '../src/components/ExampleButton.vue'

describe('ExampleButton.vue', () => {
  it('renders props.msg when passed', () => {
    const text = 'text'
    const wrapper = shallowMount(ExampleButton, {
      propsData: { text }
    })
    expect(wrapper.text()).toMatch(text)
  })
})
