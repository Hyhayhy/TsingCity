<template>
	<!-- <view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view> -->
	<view style="height: 100vh;background-color: pink;">
		<view>
			<h1>1233</h1>
		</view>
		<!-- // native模式，无需配置其他项 -->
		<!-- <m-tabbar native></m-tabbar> -->
		<view class="bar">
			<image class="bar_index" src="../../static/tabindex.png" mode=""></image>
			<view @click="goshoucang" class="bar_item">
				<image class="bar_item_img" src="../../static/tabbar-icons/me.png" mode=""></image>
				<view class="bar_item_text">
					收藏
				</view>
			</view>
			<view @click="gomap" class="bar_item">
				<image class="bar_item_img" src="../../static/tabbar-icons/map.png" mode=""></image>
				<view class="bar_item_text">
					地图
				</view>
			</view>
			<view class="bar_item">
				<view class="bar_item_img">

				</view>
				<view class="bar_item_text">
					首页
				</view>
			</view>
			<view @click="goquestion" class="bar_item">
				<image class="bar_item_img" src="../../static/tabbar-icons/layer.png" mode=""></image>
				<view class="bar_item_text">
					答题
				</view>
			</view>
			<view @click="gophoto" class="bar_item">
				<image class="bar_item_img" src="../../static/tabbar-icons/gallery.png" mode=""></image>
				<view class="bar_item_text">
					图片
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navTab from '../../components/nav-bar/nav_tab.vue'
	export default {
		components: {
			navTab
		},
		data() {
			return {
				
			}
		},
		onLoad() {},
		methods: {
			gophoto() {
				uni.navigateTo({
					url: '/pages/photo/photo'
				})
			},
			goquestion() {
				uni.navigateTo({
					url: '/pages/question/question'
				})
			},
			gomap() {
				uni.navigateTo({
					url:'/pages/math/math'
				})
			},
			goshoucang() {
				uni.navigateTo({
					url: '/pages/me/me'
				})
			}
		},
	}
</script>

<style>
	.bar_index {
		position: absolute;
		top: -50rpx;
		left: 42%;
		width: 122rpx;
		height: 122rpx;
	}

	.bar_item_text {

		color: rgba(133, 163, 187, 1);
	}

	.bar_item_img {
		width: 28rpx;
		height: 36rpx;
		margin-bottom: 30rpx;
	}

	.bar_item {
		width: 20%;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.bar {
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		width: 100%;
		height: 160rpx;
		background: url('../../static/tabbarBG.png') no-repeat;
		background-size: 100%;

	}
</style>