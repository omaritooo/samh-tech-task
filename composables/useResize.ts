import { onMounted, onUnmounted, ref } from 'vue'

interface ReturnType { windowWidth: Ref<number> }

export function useResize(): ReturnType {
  const windowWidth = ref<number>(0)

  const updateWidth = (): void => {
    windowWidth.value = window.innerWidth
  }

  onMounted(() => {
    updateWidth()
    window.addEventListener('resize', updateWidth)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })

  return {
    windowWidth,
  }
}
