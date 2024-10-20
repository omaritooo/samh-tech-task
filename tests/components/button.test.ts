import { mount } from '@vue/test-utils'

import { describe, expect, it } from 'vitest'
import PartialsButton from '../../components/Partials/Button.vue'

describe('partialsButton.vue', () => {
  it('renders correctly with given props', () => {
    // Arrange
    const wrapper = mount(PartialsButton, {
      props: {
        type: 'default',
        icon: 'mdi:check',
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('renders the slot content', () => {
    const wrapper = mount(PartialsButton, {
      slots: {
        default: 'Click Me',
      },
    })

    expect(wrapper.text()).toContain('Click Me')
  })

  it('emits event on button click', async () => {
    const wrapper = mount(PartialsButton)

    await wrapper.find('button').trigger('click')
  })
})
