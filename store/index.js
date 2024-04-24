import {
	defineStore
} from 'pinia';

export const useStore = defineStore('counter', {
	state: () => {
		return {
			uid:'',
			loginState:false
		};
	},
	actions: {
		setUid(e){
			this.uid=e;
		},
		setLogin(e){
			this.loginState=e
		}
	},
	// 开启数据持久化
	  persist: {
	    enabled: true,
	  },
});