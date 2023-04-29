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
import { Data } from '../modules/data'

Chart.register(Legend, Title, Tooltip)
Chart.defaults.plugins.title.display = true

const data = computed(() => ({
  labels: [1,2,3,4,5],//Data.forEach((el)=>{}),

  datasets: [
    {
      data: [3,4,5,5,4,61],
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
    autocolors: {
        mode: 'data',
      },
    title: {
      text: "Expence Chart"
    }
  }
})
</script>
<style>
    
</style>
