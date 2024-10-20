<script lang="ts" setup>
const radioGroup = [{
  id: 'oneWay',
  label: 'One Way',
  value: 'one-way',
  name: 'One way',
}, {
  id: 'roundTrip',
  label: 'Round Trip',
  value: 'round-trip',
  name: 'Round Trip',
}]
const tripType = ref<string>('one-way')
</script>

<template>
  <section class="h-[600px] flex flex-col justify-between w-full">
    <div class="flex items-center justify-center flex-1">
      <h1 class="text-5xl max-w-3xl text-center my-auto font-bold bg-gradient-to-r flex items-center from-content to-primary bg-clip-text text-transparent">
        Discover Our Paradise Worlds,
        Travel Anywhere Now!
      </h1>
    </div>
    <article class="bg-white rounded-tl-2xl rounded-br-2xl px-6 py-6 flex flex-col gap-y-2">
      <div class="border-b-primary w-full border-b border-opacity-25 pb-6">
        <PartialsRadioGroup v-model="tripType" :values="radioGroup" />
      </div>
      <PartialsForm>
        <PartialsInput name="textfield" label="From" icon="la:plane-departure" type="text" />
        <PartialsInput name="textfield" label="To" icon="la:plane-arrival" type="text" />
        <PartialsInput name="textfield" label="Depart" icon="la:calendar-day" type="text" />
        <PartialsInput name="textfield" label="Return" icon="la:calendar-day" type="text" />
        <PartialsInput name="textfield" label="Cabin Class & Travelers" icon="ic:baseline-airline-seat-recline-extra" type="text" />
      </PartialsForm>
    </article>
  </section>
</template>
