<template>
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
				<img class="jd_img" src="" />
				<span class="name">茶山风景区</span>
			</view>
			<view class="main_info" v-if="isFocused === 'story'">
				<span class="title_two">栈桥</span>
				<span class="txt_two">message</span>
			</view>
		</view>
		
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const isFocused = ref('landscape');
	const isFlipped = ref(false);

	const toggleFocus = (target) => {
		isFocused.value = target;
		isFlipped.value = false; // Reset flip state
	}

	const toggleFlip = () => {
		isFlipped.value = !isFlipped.value;
	}
</script>

<style scoped>
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

	.main_info {
		position: fixed;
		display: flex;
		left: 12vw;
		top: 21vh;
		width: 77vw;
		height: 62vh;
		opacity: 1;
		border-radius: 20px;
		background: rgba(104, 135, 255, 0.9);
	}

	/* 第二主页 */
	.title_two {
		/*文本 2*/
		position: fixed;
		display: flex;
		left: 45vw;
		top: 24vh;
		width: 48px;
		height: 35px;
		opacity: 1;
		/** 文本1 */
		font-size: 24px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 34.75px;
		color: rgba(0, 0, 0, 1);
		text-align: left;
		vertical-align: top;
	}

	.txt_two {
		/*文本 3*/
		position: fixed;
		display: flex;
		left: 20vw;
		top: 30vh;
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
		position: fixed;
		display: flex;
		left: 37vw;
		top: 75vh;
		height: 35px;
		opacity: 1;
		/** 文本1 */
		font-size: 24px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 34.75px;
		color: rgba(0, 0, 0, 1);
		text-align: left;
		vertical-align: top;

	}
</style>