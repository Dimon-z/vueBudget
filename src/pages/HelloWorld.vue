<script setup lang="ts">
import { ref } from 'vue'


const count = ref(0)
</script>

<template>
<router-view v-slot="{ Component }">
  <keep-alive include="inputForm2">
    <component :is="Component" />
  </keep-alive>
</router-view>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

