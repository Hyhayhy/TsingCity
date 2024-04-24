<script setup>
	import {
		ref
	} from 'vue';
	import navTab from '../../components/nav-bar/nav_tab.vue'
	const aid = ref()
	const range = [{
			value: 0,
			text: "即墨区"
		},
		{
			value: 1,
			text: "城阳区"
		},
		{
			value: 2,
			text: "崂山区"
		},
		{
			value: 3,
			text: "市北区"
		},
		{
			value: 4,
			text: "市南区"
		},
		{
			value: 5,
			text: "平度市"
		},
		{
			value: 6,
			text: "新海岸新区"
		},
		{
			value: 7,
			text: "李沧区"
		},
		{
			value: 8,
			text: "胶州市"
		},
		{
			value: 9,
			text: "莱西市"
		},
	]
	const change = (e) => {
		// console.log("e:", e+1);
		aid.value = e + 1;
	}
	const go_question = () => {
		console.log(aid.value);
		uni.navigateTo({
			url: `ques_info?aid=` + aid.value
		})
	}
</script>
<template>
	<view class="bg">
		<navTab></navTab>
		<view class="content">
			<view class="jx2"></view>
			<view class="xlk"><uni-data-select v-model="value" :localdata="range" @change="change" :clear="false"
					style="width: 45vw;background-color: white;"></uni-data-select></view>
			<view class="btn" @click="go_question"><img src="../../static/tab.png" /></view>
		</view>
	</view>
</template>
<style scoped>
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

	.content {
		/*矩形 2*/
		position: fixed;
		display: flex;
		left: 13vw;
		top: 12vh;
		width: 75vw;
		height: 70vh;
		opacity: 1;
		border-radius: 20px;
		background: rgba(255, 255, 255, 0.9);

	}

	.jx2 {
		/*矩形 2*/
		position: fixed;
		display: flex;
		/*矩形 1*/
		left: 31vw;
		top: 20vh;
		width: 173.12px;
		height: 238.54px;
		opacity: 1;
		border-radius: 20px;
		background: url(https://img.js.design/assets/img/64a783a70aecaf4dfd7a50ff.jpg);
	}

	.xlk {

		position: fixed;
		display: flex;
		/*矩形 1*/
		left: 30vw;
		top: 55vh;
		z-index: 999999;
	}

	.btn image {
		position: fixed;
		display: flex;
		left: 38vw;
		top: 65vh;
		width: 112px;
		height: 54px;
		opacity: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;

	}
</style>