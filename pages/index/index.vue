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

			<view class="main_info" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"
				:style="{ transform: `translateX(${translateX}px)` }">
				<view v-if="isFocused === 'landscape'">
					<img class="jd_img" :src="currentInfo.imag1" />
					<div class="name">{{currentInfo.name}}</div>
				</view>
				<view v-if="isFocused === 'story'">
					<div class="title_two">{{currentInfo.name}}</div>
					<div class="txt_two">{{currentInfo.jianjie}}</div>
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
	
	import {
		useStore
	} from '../../store/index'
	
	import {
		storeToRefs
	} from 'pinia';

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

	const get_info = () => {
		uni.request({
			url: 'http://hexpect.cn:9001/homepage/getInfo',
			// url: '/api/homepage/getInfo',
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

	// 滑动切换逻辑

	const infos = [{
			id: "44",
			name: "五四广场",
			jianjie: "五四广场，位于山东省青岛市市南区东海西路，北依青岛市人民政府办公大楼，南临浮山湾，总占地面积10公顷。青岛市标志性建筑，为纪念由于青岛主权问题引发的五四运动而命名。截至2020年占地面积10万平方米。五四广场分南北两部分，分布于中轴线上的市人民政府办公大楼、隐式喷泉等。",
			dengji: "2A",
			suoshuqu: "5",
			jingdu: "120.38494",
			weidu: "36.06203",
			imag1: "https://tsingcity-1310015893.cos.ap-nanjing.myqcloud.com/qingcheng/市南区/五四广场/c637d6a44e4592155eb4cf0702b7455.png",
			dj: null
		},
		{
			id: "50",
			name: "栈桥",
			jianjie: "青岛栈桥是青岛海滨风景区的景点之一，是国务院于1982年首批公布的国家级风景名胜区，也是首批国家AAAA级旅游景区。青岛栈桥位于游人如织的青岛中山路南端，桥身从海岸探入如弯月般的青岛湾深处。",
			dengji: "4A",
			suoshuqu: "5",
			jingdu: "120.319859",
			weidu: "36.060231",
			imag1: "https://tsingcity-1310015893.cos.ap-nanjing.myqcloud.com/qingcheng/市南区/栈桥/3560c01ddd7b6070b52732654102c8f.png",
			dj: null
		},
		{
			id: "30",
			name: "崂山风景区",
			jianjie: "崂山古称牢山、劳山。坐落在山东半岛的东南，西靠青岛，东南两面濒临黄海。面积386平方公里，崂顶巨峰，海拔1，133米。既是中国道教名山，又是著名的避暑游览胜地。",
			dengji: "5A",
			suoshuqu: "3",
			jingdu: "120.583641",
			weidu: "36.211591",
			imag1: "https://tsingcity-1310015893.cos.ap-nanjing.myqcloud.com/qingcheng/崂山区/崂山风景区/20070719154113_7WXZZAMF.jpg",
			dj: null
		},
	];

	let startX = 0;
	let translateX = ref(0);
	let currentIndex = 0;
	const currentInfo = ref(infos[currentIndex]);
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
		// console.log(res);
		const newInfo = res
		infos.push(newInfo); // 使用数组的 push 方法添加新数据
	};
	
	onMounted(() => {
		get_info()
		const store = useStore();
		const {
				uid,
				login
			} = storeToRefs(store)
		if (!store.$state.loginState) {
		  // 用户未登录，进行相应的处理，比如跳转到登录页面
		  uni.redirectTo({
		    url: '/pages/login/login'
		  });
		}
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
		left: 10vw;
		top: 4vh;
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
		left: 7vw;
		top: 14vh;
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
		text-indent: 35px;
	}
</style>