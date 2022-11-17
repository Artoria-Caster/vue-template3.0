import { defineStore } from 'pinia'
import global from '@/utils/global'
import { ref } from 'vue'
// import { useAuthStore } from '@/stores/modules/store.auth'
import HttpApi from '@/utils/http'

const http = new HttpApi()

export const useHttpStore = defineStore('http', () => {
	//http连接请求状态 暂时保留等待扩展
	const invoking = ref(false)

	//改变请求状态的封装
	const changeInvoking = (status) => {
		invoking.value = status
	}

	//http请求封装
	const invokeApi = (options) => {
		let {
			headers = {},
			server = global.API_ADDR, //自传入接口地址或使用默认
			apiGate,
			params,
			timeout = 3000, // withoutToken
		} = options

		const { method, url } = apiGate

		if (headers['Content-Type']) {
			headers['Content-Type'] = 'application/x-www-form-urlencoded'
		}
		//TODO userToken的验证按照实际需求设置

		// let token = useAuthStore().getToken()
		// if (!withoutToken && token && token.access_token) {
		// 	headers['Authorization'] = 'Bearer ' + token.access_token
		// }

		//组合url
		const requestURL = server + url

		switch (method) {
			case 'get':
				return http.get(headers, requestURL, params, timeout)
			case 'post':
				return http.post(headers, requestURL, params, timeout)
			default:
				//TODO 其他类型按需求添加
				return Promise.error()
		}
	}

	return { invoking, changeInvoking, invokeApi }
})
