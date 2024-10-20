import PartialsInput from '@/components/Partials/Input.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('input.vue', () => {
  it('renders correctly with given props', () => {
    const wrapper = mount(PartialsInput, {
      props: {
        name: 'test-input',
        label: 'Test Label',
        icon: 'mdi:check',
        placeholder: 'Enter your text',
        type: 'text',
      },
    })

    expect(wrapper.find('label').text()).toBe('Test Label')
    expect(wrapper.find('input').attributes('placeholder')).toBe('Enter your text')
    expect(wrapper.find('input').attributes('type')).toBe('text')
    expect(wrapper.find('input').element.value).toBe('')
  })

  it('emits update:modelValue when input value changes', async () => {
    const wrapper = mount(PartialsInput, {
      props: {
        name: 'test-input',
        label: 'Test Label',
        icon: 'mdi:check',
        placeholder: 'Enter your text',
        type: 'text',
      },
    })

    await wrapper.find('input').setValue('New value')
    expect(wrapper.find('input').element.value).toBe('New value')
  })
})
