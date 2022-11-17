// 国际化
// noinspection NpmUsedModulesInstalled

import { createI18n } from 'vue-i18n'
//这个是帮助我们导入自定义语言包的，详情可以看vite-plugin-vue-i18n插件文档
import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = createI18n({
	locale: 'zhCN', //设置默认语言，这个字符串通过上面messages方式导入默认为自定义语言包的文件名（比如这里就'zhCN'和'en'之后我们就可以根据这两个标识来动态的切换语言）
	messages,
})
export const setI18n = (app) => {
	app.use(i18n)
}

export default i18n
