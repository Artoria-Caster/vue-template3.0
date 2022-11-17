import axios from 'axios'
import qs from 'qs'

class HttpApi {
	invoke(headers, url, method, params, timeout) {
		return new Promise((resolve, reject) => {
			if (!(params instanceof FormData) && method === 'POST') {
				params = qs.stringify(params)
			}
			axios({
				headers: {
					...headers,
				},
				responseType: 'json',
				method: method,
				timeout: timeout || 3000,
				url: url,
				data: method === 'POST' ? params : null,
				params: method === 'GET' || method === 'DELETE' ? params : null,
				withCredentials: false,
			})
				.then((result) => {
					//todo 返回处理成功逻辑 需要自定义
					resolve(result)
				})
				.catch((error) => {
					//todo 返回失败逻辑 需要自定义
					reject(error)
				})
		})
	}

	get(headers, url, params, timeout) {
		return this.invoke(headers, url, 'GET', params, timeout)
	}

	post(headers, url, params, timeout) {
		return this.invoke(headers, url, 'POST', params, timeout)
	}
}

export default HttpApi
