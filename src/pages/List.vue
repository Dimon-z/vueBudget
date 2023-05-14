<template>
    <div v-for="item in arrayOfExpences">
        <storeCard :="item" @delete="store.deleteExpenceObj"/>
    </div>
</template>
<script setup lang="ts">
import storeCard from '../components/storeCard.vue'
import { useBudgetStore } from '../useBudgetStore/useBudgetStore';
const store = useBudgetStore()
const arrayOfExpences = store.arrayOfExpences
</script>
<style>
    
</style>