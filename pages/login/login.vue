<template>
	<view>
		<button open-type="getUserInfo" @getuserinfo="logins">点击获取</button>
		<button @click="stare">状态</button>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		useStore
	} from '../../store/index'
	import {
		storeToRefs
	} from 'pinia';
	const usr_info = ref()
	const logins = (e) => {
		uni.login({
			"provider": "weixin",
			success: function(event) {
				console.log(event);
				const {
					code
				} = event
				uni.request({
					url: 'http://101.42.249.157:9001/userInfos/login', //仅为示例，并非真实接口地址。
					method: 'POST',
					data: {
						code: event.code
					},
					success: (res) => {
						//获得token完成登录
						// console.log(res.header.Authorization);
						// console.log(res.data.data);
						let str = res.data.data
						// 使用正则表达式提取键值对
						let regex = /(\w+)\=([^\,]+)(?:\,|\))/g;
						let match;
						let jsonObj = {};

						while ((match = regex.exec(str)) !== null) {
							// 将键值对添加到JSON对象中
							jsonObj[match[1]] = match[2];
						}

						// 输出转换后的JSON对象
						usr_info.value = jsonObj
						console.log(usr_info.value.uid);
					}
				});
			},
			fail: function(err) {
				// 登录授权失败
				// err.code是错误码
			}
		})
	}
	const store = useStore();
	const {
			uid,
			login
		} = storeToRefs(store)
	function stare(){
		console.log(123);
		store.setUid(usr_info.value.uid);
		store.setLogin(true);
		console.log(store.$state.uid);
		console.log(store.$state.loginState);
	}
</script>


<style scoped>

</style>