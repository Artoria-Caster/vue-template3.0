<template>
  <h1>Home</h1>
  <button @click=' counterStore.increment()'>按钮</button>
  <div>数据：{{ counterStore.count }}</div>
</template>

<script setup>
import { useCounterStore } from '@/stores/home'
const counterStore = useCounterStore()
</script>

<style scoped>

</style>