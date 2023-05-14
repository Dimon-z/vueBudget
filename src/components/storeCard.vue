<template>
  <v-card
    width="300"
    :title="expenceType"
    :subtitle="location"
    :text="summa + ' ' + currencyName "
  >
    <v-btn @click="$emit('delete', timestamp)">Delete</v-btn>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
    expenceType:String,
    location:String ,
    summa:String,
    currencyName:String ,
    timestamp:String,
});
defineEmits()


</script>

<style scoped></style>
