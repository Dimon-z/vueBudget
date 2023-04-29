<script setup lang="ts">
import { RouterView } from 'vue-router';
import Chart from 'chart.js/auto';
import autocolors from 'chartjs-plugin-autocolors';
Chart.register(autocolors);

import Menu from './components/menu.vue'
</script>

<template>
  <main>
    <Menu />
    <router-view />
  </main>
</template>

<style scoped>


</style>
