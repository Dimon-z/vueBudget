<template>
    <form>
        <VueDatePicker v-model="date"></VueDatePicker>
        <v-text-field v-model="date" label="Date" required></v-text-field>
        <v-text-field v-model="summa" label="summa" required></v-text-field>
        <v-text-field v-model="location" label="Location" required></v-text-field>
        <v-select v-model="expenceType" :items="expences" label="Expence type" required></v-select>
        <v-select v-model="currencyName" :items="items" label="Currency" required></v-select>
        <v-btn class="mr-4" @click="submit">
            Add
        </v-btn>
        <v-btn @click="clear">
            clear
        </v-btn>
    </form>
</template>




<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { DataObj } from '../useBudgetStore/useBudgetStore';
import { ref } from 'vue';
import { useBudgetStore } from '../useBudgetStore/useBudgetStore';

const date = ref()
const summa = ref()
const location = ref()
const currencyName = ref()
const items = ['RUB', 'USD']
const expenceType = ref()
const expences = ['food','health','education','logistic','hobby']
const store = useBudgetStore()

function submit() {
    store.addExpenceObj(new DataObj(summa.value, date.value, location.value, currencyName.value,expenceType.value))
    console.log(store)
}
function clear() {
 date.value = '';
 summa.value = '';
 location.value = '';
 currencyName.value = '';
}

</script>


<style></style>