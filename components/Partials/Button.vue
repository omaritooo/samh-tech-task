<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  type?: 'default' | 'warning' | 'success' | 'danger'
  icon?: string
  to?: string
}

// eslint-disable-next-line unused-imports/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  icon: '',
  to: '',
})
</script>

<template>
  <NuxtLink v-if="to" :to="to" class="bg-primary text-white text-base px-6 py-3 rounded-lg">
    <slot />
  </NuxtLink>
  <button v-else class="bg-primary text-white text-base px-5 py-3 rounded-lg w-fit h-fit max-h-12">
    <Icon v-if="icon" :icon width="24" height="24" />
    <slot />
  </button>
</template>
