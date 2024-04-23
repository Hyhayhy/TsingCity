import {
	defineStore
} from 'pinia';

export const useStore = defineStore('counter', {
	state: () => {
		return {
			count: '',
			uid:'',
			loginState:false
		};
	},
	actions: {
		increment(e) {
			this.count=e;
		},
		decrement() {
			this.count--;
		},
		setUid(e){
			this.uid=e;
		},
		setLogin(e){
			this.loginState=e
		}
	},
});