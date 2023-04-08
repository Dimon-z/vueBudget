<template>
    <form>
        <v-text-field v-model="currency" label="Currency" required></v-text-field>
        <v-text-field v-model="date" label="Date" required></v-text-field>
        <v-text-field v-model="summa" label="summa" required></v-text-field>
        <v-text-field v-model="type" label="type" required></v-text-field>
        <v-text-field v-model="typeName" label="typeName" required></v-text-field>
        <v-select v-model="currencyName" :items="items" label="Item" required></v-select>
        <v-checkbox v-model="checkbox" label="Do you agree?" required></v-checkbox>

        <v-btn class="mr-4" @click="submit">
            submit
        </v-btn>
        <v-btn @click="clear">
            clear
        </v-btn>
    </form>
</template>




<script setup lang="ts">
import { Data, DataObj } from '../modules/data'
import { ref } from 'vue';

let currency = ref()
let date = ref()
let summa = ref()
let type = ref()
let typeName = ref()
let currencyName = ref()
let checkbox = ref()
let items = ['RUB', 'baks']

function submit() {
    Data.push(new DataObj(summa.value, currency.value, date.value, type.value, typeName.value, currencyName.value))
    console.log(Data)
}
function clear() {
 currency.value = '';
 date.value = '';
 summa.value = '';
 type.value = '';
 typeName.value = '';
 currencyName.value = '';
 checkbox.value = false;
}

</script>


<style></style>