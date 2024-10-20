<script lang="ts" setup>
import { Icon } from '@iconify/vue'

interface Props {
  name: string
  label: string
  icon: string
  placeholder?: string
  type: 'date' | 'email' | 'password' | 'text' | 'color' | 'file'
}
// eslint-disable-next-line unused-imports/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Please enter text',
})

const inputModel = defineModel('')
</script>

<template>
  <div class="flex flex-col md:w-fit gap-y-2 w-full">
    <label class="flex items-center gap-x-2 text-base font-bold" :for="name"><Icon class="text-primary" width="26" height="23" :icon /> {{ label }}</label>
    <input v-model="inputModel" :name class="border-0 ring-0 placeholder:text-secondary focus:border-b-primary focus:border-b bg-transparent ring-offset-0 focus:outline-none h-9 py-2 leading-5" :placeholder :type>
  </div>
</template>
