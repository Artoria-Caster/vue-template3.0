import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useHttpStore } from '@/stores/modules/store.http'

// noinspection JSUnresolvedVariable
const request = useHttpStore().invokeApi

export const useAuthStore = defineStore('auth', () => {
	//请求的示例
	const apiGate = ref({
		getToken: { method: 'get', url: '/oauth/token', withoutToken: false },
	})
	const getUserToken = (params, success = () => {}, failed = () => {}) => {
		const options = {
			apiGate: apiGate.value.getToken,
			params,
			success,
			failed,
		}
		//一个示例的请求
		request(options)
			.then((result) => {
				//TODO 数据处理逻辑
				success && success(result)
			})
			.catch((error) => {
				//TODO 数据处理逻辑
				failed && failed(error)
			})
	}

	return { getUserToken }
})
