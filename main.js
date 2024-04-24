import App from './App'
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'


// 引入公用的组件 uni-nav-bar
import tabBar from "@/components/nav-bar/nav_tab.vue"
Vue.component("nav-bar", tabBar);



Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif


// #ifdef VUE3
import {
	createSSRApp
} from 'vue'

//导入pinia  
import {
	createPinia
} from 'pinia'
import persist from 'pinia-plugin-persist-uni'
const pinia = createPinia()
pinia.use(persist)
export function createApp() {
	const app = createSSRApp(App)

	// 创建Pinia实例  // 将pinia实例挂载到vue实例上 
	app.use(pinia);

	return {
		app,
	}
}
// #endif