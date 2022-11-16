<template>
	<h1>Home</h1>
	<button @click="homeStore.increment()">按钮</button>
	<div>数据：{{ homeStore.count }}</div>
	<button @click="setLanguage('zhCN')">中文</button>
	<button @click="setLanguage('en')">英文</button>
	<div>国际化：{{ t('HelloWorld') }}</div>
</template>

<script setup>
import { useHomeStore } from '@/stores/home'
import { useI18n } from 'vue-i18n'
import i18n from '@/locales/index'
import { ref } from 'vue'

const { t } = useI18n()
const localeRef = ref(i18n.global.locale)

const homeStore = useHomeStore()

const setLanguage = (type) => {
  localeRef.value = type
}
</script>

<style scoped></style>