import axios from 'axios'

class HttpApi {
	constructor(options) {
		if (options) {
			this.baseURL = options.baseURL ? options.baseURL : ''
		}
	}

	invoke(headers, url, method, params, success, failed, timeout) {
		// if (!(params instanceof FormData) && method === "POST" && headers["Content-Type"] !== "application/json") {
		//     params = qs.stringify(params);
		// }
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
			baseURL: this.baseURL,
			withCredentials: false,
		})
			.then((res) => {
				if (success) success(res.data)
			})
			.catch((error) => {
				if (failed) failed(error)
			})
	}

	get(headers, url, params, success, failed, timeout) {
		this.invoke(headers, url, 'GET', params, success, failed, timeout)
	}

	post(headers, url, params, success, failed, timeout) {
		this.invoke(headers, url, 'POST', params, success, failed, timeout)
	}

	delete(headers, url, params, success, failed, timeout) {
		this.invoke(headers, url, 'POST', params, success, failed, timeout)
	}
}

export default HttpApi
