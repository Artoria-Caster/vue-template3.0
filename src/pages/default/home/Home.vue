<template>
	<h1>Home</h1>
	<button>按钮</button>
	<div>数据：</div>
	<button @click="setLanguage('zhCN')">中文</button>
	<button @click="setLanguage('en')">英文</button>
	<div>国际化：{{ t('HelloWorld') }}</div>
	<button @click="testPinia">测试pinia</button>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import i18n from '@/locales/index'
import { ref } from 'vue'
import { useAuthStore } from '@/stores/modules/store.auth'

const { t } = useI18n()
const localeRef = ref(i18n.global.locale)

const setLanguage = (type) => {
	localeRef.value = type
}

const authStore = useAuthStore()

const testPinia = () => {
	authStore.getUserToken({})
}
</script>

<style scoped></style>
