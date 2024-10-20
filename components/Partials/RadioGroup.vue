<script setup lang="ts">
interface RadioButton {
  id: string
  label: string
  value: string
  name: string
}
interface Props {
  values: RadioButton[]
}
const { values } = defineProps<Props>()
const model = defineModel()
</script>

<template>
  <div class="flex justify-center gap-x-4">
    <div
      v-for="radio in values"
      :key="radio.id" class="custom-radio"
    >
      <input :id="radio.id" v-model="model" type="radio" :name="radio.name" :value="radio.value">
      <label :for="radio.id">{{ radio.label }}</label>
    </div>
  </div>
</template>
