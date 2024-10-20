<script setup lang="ts">
import { Icon } from '@iconify/vue'

const list = ['Home', 'Promo', 'My Bookings']
const showMenuItems = ref<boolean>(true)
const { windowWidth } = useResize()
watch(
  windowWidth,
  (newVal) => {
    if (newVal >= 768) {
      showMenuItems.value = true
    }
    else {
      showMenuItems.value = false
    }
  },
)
</script>

<template>
  <header>
    <nav class="flex flex-col md:flex-row container mx-auto md:items-center py-2 px-4 md:px-0">
      <div class="flex justify-start gap-x-16">
        <button class="block md:hidden" @click="showMenuItems = !showMenuItems">
          <Icon icon="quill:hamburger" width="32" height="32" />
        </button>
        <PartialsLogo />
      </div>
      <div v-if="showMenuItems" class="flex flex-col gap-y-4 md:flex-row justify-evenly flex-1 my-auto md:items-center">
        <ul class=" flex flex-col md:flex-row gap-2 flex-1 justify-center text-base gap-x-12">
          <li v-for="item in list" :key="item">
            {{ item }}
          </li>
        </ul>

        <PartialsButton>
          Sign in
        </PartialsButton>
      </div>
    </nav>
  </header>
</template>
