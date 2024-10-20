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
const { locale, locales, setLocale } = useI18n()
function langSwitcher(locale: any) {
  setLocale(locale.code)
  document.documentElement.setAttribute('dir', locale.dir)
}
const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <header>
    <nav class="container flex flex-col px-4 py-2 mx-auto md:flex-row md:items-center md:px-0">
      <div class="flex justify-start gap-x-16">
        <button class="block md:hidden" @click="showMenuItems = !showMenuItems">
          <Icon icon="quill:hamburger" width="32" height="32" />
        </button>
        <PartialsLogo />
      </div>
      <div v-if="showMenuItems" class="flex flex-col flex-1 my-auto gap-y-4 md:flex-row justify-evenly md:items-center">
        <ul class="flex flex-col justify-center flex-1 gap-2 text-base  md:flex-row gap-x-12">
          <li v-for="item in list" :key="item">
            {{ item }}
          </li>
        </ul>

        <div class="flex gap-x-2">
          <PartialsButton>
            Sign in
          </PartialsButton>
          <button v-for="localeVal in availableLocales" :key="localeVal.code" @click.prevent="langSwitcher(localeVal)">
            {{ localeVal.code }}
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
