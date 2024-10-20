<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  img?: string
  location: string
  address: string
  duration: number
  price: number
}

const { img = 'https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary-1200x675.webp', location, address, duration, price } = defineProps<Props>()

function formatDays(days: number): string {
  if (days <= 7) {
    return `${days} Day${days === 1 ? '' : 's'}`
  }
  else {
    const weeks = Math.floor(days / 7)
    const remainingDays = days % 7

    let result = `${weeks} Week${weeks === 1 ? '' : 's'}`

    if (remainingDays > 0) {
      result += `, ${remainingDays} Day${remainingDays === 1 ? '' : 's'}`
    }

    return result
  }
}
</script>

<template>
  <article class="bg-[#F0F0F0] p-4 rounded-2xl border border-white w-fit gap-y-4 flex flex-col hover:bg-primary hover:bg-opacity-5 transition duration-150 hover:border-primary">
    <LazyNuxtImg width="264" height="180" class="rounded-tl-lg rounded-br-lg" :src="img" />
    <span class="flex text-xs items-center text-primary gap-x-2"><Icon icon="mdi:location" width="12" height="12" /> <span class="text-disabled">{{ address }}</span></span>
    <div class="flex flex-col gap-y-1">
      <h1 class="text-content font-bold text-base leading-6">
        {{ location }}
      </h1>
      <h2 class="text-gray-600 text-sm leading-5">
        {{ formatDays(duration) }}
      </h2>
    </div>
    <span class="text-primary font-bold text-sm leading-5">
      ${{ price.toLocaleString('en-US') }}
    </span>
  </article>
</template>
