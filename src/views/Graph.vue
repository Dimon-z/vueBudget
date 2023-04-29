<template>
    <div>Graph</div>
    <DoughnutChart
    :chart-data="data"
    :options="options"
    css-classes="chart-container" />
</template>
<script setup lang="ts">

import { Chart, Legend, Title, Tooltip } from "chart.js"
import { DoughnutChart } from "vue-chart-3"
import {ref, computed} from 'vue'

Chart.register(Legend, Title, Tooltip)
Chart.defaults.plugins.title.display = true

const dataValues = ref([10, 20, 40])

const data = computed(() => ({
  labels: ["Foo", "Bar", "Baz"],

  datasets: [
    {
      data: dataValues.value,
      backgroundColor: ["#859900", "#d33682", "#cb4b16"]
    }
  ]
}))

const options = ref({
  elements: {
    arc: {
      borderColor: "#073642"
    }
  },

  plugins: {
    title: {
      text: "Doughnut"
    }
  }
})
</script>
<style>
    
</style>
