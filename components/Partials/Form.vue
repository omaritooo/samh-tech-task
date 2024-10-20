<script lang="ts" setup>
const emit = defineEmits(['submit'])
function handleSubmit() {
  emit('submit')
}
</script>

<template>
  <form class="flex justify-between h-fit py-2 flex-wrap flex-col md:flex-row w-full" @submit.prevent="handleSubmit">
    <slot />
    <PartialsButton icon="iconamoon:search-light" type="default" />
  </form>
</template>
