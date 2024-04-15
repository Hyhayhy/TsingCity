<template>
	<view class="bg">
		<navTab></navTab>
		<img class="title_main" src="../../static/logo.png" />
		<img class="info_menu" src="../../static/info_menu.png" />
		<view class="content">
			<div class="title_change">
				<div class="titles">
					<span class="txt" @click="toggleFocus('landscape')"
						:class="{ active: isFocused === 'landscape' }">景观</span>
					<span class="txt" @click="toggleFocus('story')" :class="{ active: isFocused === 'story' }">故事</span>
				</div>
				<div class="background" :style="{ left: isFocused === 'story' ? '50%' : '0' }"></div>
			</div>
			<view class="main_info">
				<view v-if="isFocused === 'landscape'">
					<img class="jd_img" :src="main_info.imag1" />
					<div class="name">{{main_info.name}}</div>
				</view>
				<view v-if="isFocused === 'story'">
					<div class="title_two">{{main_info.name}}</div>
					<div class="txt_two">{{main_info.jianjie}}</div>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import navTab from '../../components/nav-bar/nav_tab.vue'
	import {
		onMounted,
		ref
	} from 'vue';
	import axios from 'axios';

	const main_info = ref({})

	const isFocused = ref('landscape');
	const isFlipped = ref(false);

	const toggleFocus = (target) => {
		isFocused.value = target;
		isFlipped.value = false; // Reset flip state
	}

	const toggleFlip = () => {
		isFlipped.value = !isFlipped.value;
	}

	onMounted(() => {
		uni.request({
			url: 'http://hexpect.cn:9001/homepage/getInfo',
			success(res) {
				// console.log(res.data.data);
				main_info.value = res.data.data;
			},
			fail(err) {
				console.log('请求失败', err);
			},
			complete() {
				// console.log('请求完成');
			}
		})
	})
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
		align-items: center;
	}

	/* 右侧按钮 */
	.info_menu {
		position: fixed;
		display: flex;
		left: 90vw;
		top: 14vh;
		width: 30px;
		height: 30px;
		opacity: 1;
	}


	/* 主体内容 */
	.main_info {
		position: fixed;
		display: flex;
		left: 12vw;
		top: 21vh;
		width: 77vw;
		height: 62vh;
		opacity: 1;
		border-radius: 20px;
		background: rgba(255, 255, 255, 0.7);
	}

	.jd_img {
		position: fixed;
		display: flex;
		left: 20.9vw;
		top: 25vh;
		width: 60vw;
		height: 45vh;
		opacity: 1;
		border-radius: 20px;
	}

	.name {
		/*文本 2*/
		position: absolute;
		display: flex;
		top: 55vh;
		/* 将顶部定位到父元素中间 */
		left: 50%;
		/* 将左边定位到父元素中间 */
		transform: translate(-50%, -50%);
		/* 通过负的自身宽高的一半来实现水平垂直居中 */
		height: 35px;
		width: 77vw;
		/** 文本1 */
		font-size: 24px;
		font-weight: 400;
		line-height: 34.75px;
		color: rgba(0, 0, 0, 1);
		justify-content: center;
	}


	/* 顶端切换 */
	.title_change {
		position: fixed;
		display: flex;
		left: 32vw;
		top: 14vh;
		width: 40vw;
		height: 36px;
		border-radius: 20px;
		background: rgba(155, 205, 235, .7);
		overflow: hidden;
	}

	.titles {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
	}

	.txt {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 16px;
		font-weight: 500;
		color: rgba(0, 0, 0, 1);
		cursor: pointer;
		position: relative;
		z-index: 1;
	}

	.txt.active {
		color: rgba(255, 255, 255, 1);
	}

	.background {
		position: absolute;
		top: 0;
		left: 0;
		width: 50%;
		height: 100%;
		background: rgba(27, 182, 136, 1);
		border-radius: 20px;
		transition: left 0.5s;
		z-index: 0;
	}

	/* 标题 */
	.title_main {
		position: fixed;
		display: flex;
		margin: 0 auto;
		top: 1.2vh;
		opacity: 1;
		height: 9vh;
	}

	/* 第二主页 */
	.title_two {
		/*文本 2*/
		position: absolute;
		display: flex;
		top: 5vh;
		/* 将顶部定位到父元素中间 */
		left: 50%;
		/* 将左边定位到父元素中间 */
		transform: translate(-50%, -50%);
		/* 通过负的自身宽高的一半来实现水平垂直居中 */
		height: 35px;
		width: 77vw;
		/** 文本1 */
		font-size: 24px;
		font-weight: 400;
		line-height: 34.75px;
		color: rgba(0, 0, 0, 1);
		justify-content: center;
	}

	.txt_two {
		/*文本 3*/
		position: fixed;
		display: flex;
		left: 20vw;
		top: 32vh;
		width: 63vw;
		height: 358px;
		opacity: 1;
		/** 文本1 */
		font-size: 14px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 21px;
		color: rgba(0, 0, 0, 1);
		text-align: left;
		vertical-align: top;
		letter-spacing: 1px;
		text-indent: 30px;
	}
</style>