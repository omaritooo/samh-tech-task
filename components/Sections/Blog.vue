<script setup lang="ts">
</script>

<template>
  <section class="flex flex-col justify-between flex-wrap mb-20 mt-10">
    <h1 class="text-content text-4xl leading-10 font-bold">
      Popular Destinations
    </h1>
    <span class="text-content text-base leading-6 mt-2 mb-10">Vacations to make your experience enjoyable in Indonesia!</span>
    <div class="flex flex-wrap justify-between px-4">
      <PartialsCard location="Flores Road Trip 3D2N" :duration="15" :price="3000" address="Manggarai Barat" />
      <PartialsCard location="Flores Road Trip 3D2N" :duration="15" :price="3000" address="Manggarai Barat" />
      <PartialsCard location="Flores Road Trip 3D2N" :duration="15" :price="3000" address="Manggarai Barat" />
      <PartialsCard location="Flores Road Trip 3D2N" :duration="15" :price="3000" address="Manggarai Barat" />
    </div>
  </section>
</template>
