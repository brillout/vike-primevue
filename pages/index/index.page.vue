<template>
  <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
  </ul>
  And this is <Button label="PrimeVue button" icon="pi pi-check" />
</template>

<script lang="ts" setup>
import Counter from './Counter.vue'
import Button from "primevue/button"

</script>
