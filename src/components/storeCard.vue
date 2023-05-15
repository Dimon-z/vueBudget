<template>
  <v-card
    width="300"
    :title="expenceType"
    :subtitle="location"
    :text="summa + ' ' + currencyName "
  >
    <v-btn @click="emit(`delete`, timeStamp)">Delete</v-btn>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
    expenceType:string,
    location:string ,
    summa:number,
    currencyName:string ,
    timeStamp:number,
}>();
const emit = defineEmits<{
  (e: 'delete', timeStamp: number): void
}>()

</script>

<style scoped></style>
