<script setup lang="ts">
import { RouterView } from 'vue-router';
import Chart from 'chart.js/auto';
import autocolors from 'chartjs-plugin-autocolors';
import Menu from './components/menu.vue'
Chart.register(autocolors);
</script>

<template>
  <main>
    <Menu />
    <router-view />
  </main>
</template>

<style scoped>


</style>
