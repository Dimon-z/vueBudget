<template>
  <div>Graph</div>
  <DoughnutChart :chart-data="data" :options="options" css-classes="chart-container" />
</template>
<script setup lang="ts">

import { Chart, Legend, Title, Tooltip } from "chart.js"
import { DoughnutChart } from "vue-chart-3"
import { ref, computed } from 'vue'
import { useBudgetStore } from "../useBudgetStore/useBudgetStore"
import { storeToRefs } from "pinia"
Chart.register(Legend, Title, Tooltip)
Chart.defaults.plugins.title.display = true

const store = useBudgetStore()

function getChartData() {
  const DataMap = new Map();
  store.arrayOfExpences.forEach((element) => {
    if (DataMap.has(element.expenceType)) {
      DataMap.set(
        element.expenceType,
        +DataMap.get(element.expenceType) + +element.summa
      );
    } else {
      DataMap.set(element.expenceType, +element.summa);
    }
  });
  return DataMap;
}

let chartData = getChartData()
console.log(chartData)
const data = computed(() => ({

  labels: Array.from(chartData.keys()),

  datasets: [
    {
      data: Array.from(chartData.values()),
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
<style></style>
