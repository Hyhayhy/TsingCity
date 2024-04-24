<template>
	<view class="bg">
		<view class="content">
			<view class="txt1">青岛栈桥</view>
			<!-- <view class="txt2">重点文物保护设施</view> -->
			<view class="txt3">栈桥及回澜阁，即青岛栈桥，俗称前海栈桥、南海栈桥、大码头，青岛海滨风景区的著名景点之一
				，位于山东省青岛市市南区太平路12号，地处青岛湾北侧，与小青岛隔水相望，始建于清光绪十七年（1891年），素有“长虹远引”之誉，是青岛市近代第一座人工码头、最具代表性和知名度的城市地标之一。</view>
			<view class="img1"></view>
		</view>
	</view>
</template>

<script>
	import {
		onMounted,
		ref
	} from "vue";
	export default {
		data(){
			return{
				jd_info:null
			}
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			// console.log(option); //打印出上个页面传递的参数。
			jd_info=option
			console.log(jd_info);
		}
	}
	const jd_info=ref()
</script>

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

	/*矩形 1*/
	.content {
		position: fixed;
		display: flex;
		left: 5vw;
		top: 10vh;
		width: 90vw;
		height: 80vh;
		opacity: 1;
		border-radius: 5px;
		background: rgba(255, 255, 255, 0.9);
		box-shadow: 0px 4px 6px 4px rgba(0, 0, 0, 0.25);
	}

	.txt1 {
		/*文本 1*/
		position: fixed;
		display: flex;
		left: 16vw;
		top: 14vh;
		height: 33px;
		opacity: 1;
		/** 文本1 */
		font-size: 24px;
		font-weight: 700;
		letter-spacing: 0px;
		line-height: 32.93px;
		color: rgba(0, 0, 0, 1);
		text-align: left;
		vertical-align: top;

	}

	.txt2 {
		/*文本 2*/
		position: fixed;
		display: flex;
		left: 16vw;
		top: 20vh;
		height: 20px;
		opacity: 1;
		/** 文本1 */
		font-size: 14px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 19.21px;
		color: rgba(89, 89, 89, 1);
		text-align: left;
		vertical-align: top;

	}

	.txt3 {
		/*文本 1*/
		position: fixed;
		display: flex;
		left: 16vw;
		top: 25vh;
		width: 70vw;
		height: 121px;
		opacity: 1;
		/** 文本1 */
		font-size: 14px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 19.21px;
		color: rgba(0, 0, 0, 1);
		text-align: left;
		vertical-align: top;

	}

	.img1 {
		/*image.png*/
		position: fixed;
		display: flex;
		left: 13vw;
		top: 55vh;
		width: 319px;
		height: 172px;
		opacity: 1;
		border-radius: 5px;
		background: url(https://img.js.design/assets/img/64a4c3c97073f71b30bb8e84.png#e70ab943e1e2599d41d445a309e594d0);
	}
</style>