import { mount } from '@vue/test-utils'

import { describe, expect, it } from 'vitest'
import Card from '../../components/Partials/Card.vue'

describe('yourComponent.vue', () => {
  it('renders correctly with given props', () => {
    const wrapper = mount(Card, {
      props: {
        img: 'https://example.com/image.jpg',
        location: 'Test Location',
        address: '123 Test St',
        duration: 10,
        price: 200,
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('h1').text()).toBe('Test Location')
    expect(wrapper.find('span.text-disabled').text()).toBe('123 Test St')
    expect(wrapper.find('h2').text()).toBe('1 Week, 3 Days')
    expect(wrapper.find('span.font-bold').text()).toBe('$200')
  })

  it('correctly formats days when duration is less than or equal to 7', () => {
    const wrapper = mount(Card, {
      props: {
        location: 'Test Location',
        address: '123 Test St',
        duration: 3,
        price: 100,
      },
    })

    expect(wrapper.find('h2').text()).toBe('3 Days')
  })

  it('correctly formats days when duration is more than 7', () => {
    const wrapper = mount(Card, {
      props: {
        location: 'Test Location',
        address: '123 Test St',
        duration: 15,
        price: 250,
      },
    })

    expect(wrapper.find('h2').text()).toBe('2 Weeks, 1 Day')
  })
})
