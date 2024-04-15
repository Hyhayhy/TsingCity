<template>
	<view class="main_info" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"
		:style="{ transform: `translateX(${translateX}px)` }">
		<view>
			<view class="title_two">{{ currentInfo.name }}</view>
			<view class="txt_two">{{ currentInfo.jianjie }}</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const infos = [{
			name: "九上沟风景区",
			jianjie: "九上沟风景区位于铁橛山下的铁山街道办事处上沟村，占地面积约9平方公里，是胶南市抗日战争和解放战争时期的“红色根据地”，也称“杨家山里”。",
		},
		{
			name: "九上沟风景区2",
			jianjie: "九上沟风景区位于铁橛山下的铁山街道办事处上沟村，占地面积约9平方公里，是胶南市抗日战争和解放战争时期的“红色根据地”，也称“杨家山里”。",
		},
	];

	let startX = 0;
	let translateX = ref(0);
	let currentIndex = 0;
	const currentInfo = ref(infos[currentIndex]);

	const get_info = () => {
		uni.request({
			// url: 'http://hexpect.cn:9001/homepage/getInfo',
			url: '/api/homepage/getInfo',
			success(res) {
				// console.log(res.data.data);
				addNewInfo(res.data.data)
			},
			fail(err) {
				console.log('请求失败', err);
			},
			complete() {
				// console.log('请求完成');
			}
		})
	}

	const touchStart = (e) => {
		startX = e.touches[0].clientX;
	};

	const touchMove = (e) => {
		const diffX = startX - e.touches[0].clientX;
		translateX.value = -diffX;
	};

	const touchEnd = (e) => {
		const diffX = startX - e.changedTouches[0].clientX;
		if (diffX < -50 && currentIndex > 0) {
			currentIndex--;
		} else if (diffX > 50 && currentIndex < infos.length - 1) {
			currentIndex++;
			if (currentIndex === infos.length - 1) {
				get_info();
			}
		}
		translateX.value = 0; // 将 translateX 重置为 0
		currentInfo.value = infos[currentIndex];
	};

	const addNewInfo = (res) => {
		console.log(res);
		const newInfo = res
		infos.push(newInfo); // 使用数组的 push 方法添加新数据
	};
</script>

<style scoped>
	.main_info {
		transition: transform 0.3s;
		overflow: hidden;
		
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