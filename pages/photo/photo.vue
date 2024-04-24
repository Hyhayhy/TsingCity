<template>
	<!-- 首先背景图 -->
	<view class="bg">
		<navTab></navTab>
		<!--  轮播图 -->
		<view>
			<div class="top">
				<img src="../../static/th.jpg" />
			</div>
		</view>
		<!-- 搜索框 -->
		<view>
			<div class="search">
				<input type="text" placeholder="搜索" />
			</div>
		</view>
		<!-- 内容 -->
		<view class="total">
			<div class="small" v-for="item in list_info" @click="showModal(item.imag1)">
				<text class="txt">{{item.name}}</text>
				<button class="btn">收藏</button>
				<img class="photo" :src="item.imag1" />
			</div>
			<div v-if="showModalFlag" class="modal">
				<span class="close" @click="closeModal">&times;</span>
				<img :src="currentImage" class="modal-content" />
			</div>
		</view>
	</view>
</template>
<script setup>
	import {
		onMounted,
		ref
	} from "vue";
	import navTab from '../../components/nav-bar/nav_tab.vue'
import loginVue from "../login/login.vue";
	const list_info = ref()
	const get_list = () => {
		uni.request({
			url: 'http://101.42.249.157:9001/imageArea/1',

			success(res) {
				console.log(res.data.data);
				list_info.value = res.data.data
			},
			fail(err) {
				console.log('请求失败', err);
			},
			complete() {
				console.log('请求完成');
			}

		})

	}
	onMounted(() => {
		get_list()

	})
	const currentImage = ref('');
	const showModalFlag = ref(false);

	const showModal = (item) => {
		// console.log(item);
		currentImage.value = item;
		showModalFlag.value = true;
	};

	const closeModal = () => {
		showModalFlag.value = false;
	};

	// 返回响应式状态和方法，供模板使用  
	//   return {  
	//     list_info,  
	//     currentImage,  
	//     showModalFlag,  
	//     showModal,  
	//     closeModal,  
	//   };  
</script>
<style scoped>
	/* 背景 */
	.bg {
		background-image: url('https://img-1310015893.cos.ap-beijing.myqcloud.com/bgimg.png');
		height: 100vh;
		background-size: 100% 100%;
		width: 100vw;
		position: fixed;
		display: flex;
		flex-direction: column;

	}

	/* 轮播图*/
	.top {
		left: 0px;
		top: 88px;
		width: 100vw;
		height: 288px;
		opacity: 1;
	}

	image {
		width: 100%;
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat center;
	}

	/* 搜索框 */
	.search {
		left: 20px;
		top: 337px;
		width: 332px;
		height: 38px;
		opacity: 1;
		border-radius: 20px;
		background: rgba(227, 227, 227, 0.82);
		margin: 0 auto;
		/* background-color: white; */
	}

	input {

		float: left;
		width: 400px;
		height: 38px;
		outline: none;
		border: none;
		margin-left: 145px;
	}

	/* 内容区 */

	.total {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 5px;
		background-color: white;
		overflow: auto;
	}

	.txt {
		text-align: center;
		font-size: 13px;
		font-weight: bold;
		font-style: italic;
	}

	.btn {
		background-color: rgba(227, 227, 227, 0.82);
		border: none;
		float: right;
		font-size: 7px;

	}

	.small {
		height: 300px;
		background-color: white;


	}

	.photo {
		border-radius: 25px;
		padding-left: 5px;
		padding-right: 5px;
	}

	.modal {
		display: block;
		position: fixed;
		z-index: 1;
		padding-top: 100px;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgb(0, 0, 0);
		background-color: rgba(0, 0, 0, 0.9);
	}

	.modal-content {
		margin: auto;
		display: block;
		width: 80%;
		max-width: 700px;
	}

	.close {
		position: absolute;
		top: 15px;
		right: 35px;
		color: #f1f1f1;
		font-size: 40px;
		font-weight: bold;
		transition: 0.3s;
	}

	.close:hover,
	.close:focus {
		color: #bbb;
		text-decoration: none;
		cursor: pointer;
	}

	.scroll-Y {
		/* height: 300rpx; */
		height: 1000rpx;
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}
</style>