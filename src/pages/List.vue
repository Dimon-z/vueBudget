<template>
  <div>
    <storeCard
      v-for="expence in store.arrayOfExpences"
      :key="expence.timeStamp"
      :="expence"
      @delete="store.deleteExpenceObj"
    />
  </div>
</template>
<script setup lang="ts">
import storeCard from "../components/storeCard.vue";
import { useBudgetStore } from "../useBudgetStore/useBudgetStore";

const store = useBudgetStore();
</script>

<style></style>
