<template>
    <form>
        <v-text-field v-model="currency" label="Currency" required></v-text-field>
        <v-text-field v-model="date" label="Date" required></v-text-field>
        <v-text-field v-model="summa" label="summa" required></v-text-field>
        <v-text-field v-model="type" label="Expence type" required></v-text-field>
        <v-text-field v-model="typeName" label="typeName" required></v-text-field>
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
import { Data, DataObj } from '../modules/data'
import { ref } from 'vue';

const currency = ref()
const date = ref()
const summa = ref()
const type = ref()
const typeName = ref()
const currencyName = ref()
const items = ['RUB', 'USD']
const expenceType = ref()
const expences = ['food','health','education','logistic','hobby']

function submit() {
    Data.push(new DataObj(summa.value, currency.value, date.value, type.value, typeName.value, currencyName.value,expenceType.value))
    console.log(Data)
}
function clear() {
 currency.value = '';
 date.value = '';
 summa.value = '';
 type.value = '';
 typeName.value = '';
 currencyName.value = '';
}

</script>


<style></style>