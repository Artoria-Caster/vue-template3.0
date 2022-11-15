<template>
  <h1>Home</h1>
  <button @click=' homeStore.increment()'>按钮</button>
  <div>数据：{{ homeStore.count }}</div>
</template>

<script setup>
import { useHomeStore } from '@/stores/home'
const homeStore = useHomeStore()
</script>

<style scoped>

</style>