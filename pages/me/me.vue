<template>
	<view class="Index">
		<navTab></navTab>
		<!-- <button @click="get_usr_list">获取信息</button> -->
		<!-- 瀑布流布局列表 -->
		<view class="pubuBox">
			<view class="pubuItem">
				<view class="item-masonry" v-for="(item, index) in comList" :key="index">
					<image :src="item.iurl" mode="widthFix"></image>
					<view class="listtitle">
						<!-- 这是没有高度的父盒子（下半部分） -->
						<!-- <view class="listtitle1">{{ item.name }}</view> -->
						<view class="listtitle3">
							{{ item.name }}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import navTab from '../../components/nav-bar/nav_tab.vue'
	import {
		onMounted, ref
	} from "vue";
	import {
		useStore
	} from '../../store/index'
	import {
		storeToRefs
	} from 'pinia';
	const store = useStore();
	const {
		uid,
	} = storeToRefs(store)
	const comList = ref(); //商品列表
	const get_usr_list = () => {
		// console.log(123);
		
		// console.log(uid);
		// console.log(123333);
		uni.request({
			url: 'http://101.42.249.157:9001/favorite/'+store.$state.uid,
			success(res) {
				// console.log(res.data);
				comList.value=res.data.data
			}
		})
	}
	onMounted(() => {
		get_usr_list()
	})
</script>

<style scoped="scoped" lang="scss">
	//瀑布流
	page {
		background-color: #eee;
		height: 100%;
	}

	.pubuBox {
		padding: 22rpx;
	}

	.pubuItem {
		column-count: 2;
		column-gap: 20rpx;
	}

	.item-masonry {
		box-sizing: border-box;
		border-radius: 15rpx;
		overflow: hidden;
		background-color: #fff;
		break-inside: avoid;
		/*避免在元素内部插入分页符*/
		box-sizing: border-box;
		margin-bottom: 20rpx;
		box-shadow: 0px 0px 28rpx 1rpx rgba(78, 101, 153, 0.14);
	}

	.item-masonry image {
		width: 100%;
	}

	.listtitle {
		padding-left: 22rpx;
		font-size: 24rpx;
		padding-bottom: 22rpx;

		.listtitle1 {
			line-height: 39rpx;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			line-clamp: 2;
			-webkit-box-orient: vertical;
			min-height: 39rpx;
			max-height: 78rpx;
		}

		.listtitle2 {
			color: #ff0000;
			font-size: 32rpx;
			line-height: 32rpx;
			font-weight: bold;
			padding-top: 22rpx;

			.listtitle2son {
				font-size: 32rpx;
			}
		}

		.listtitle3 {
			font-size: 28rpx;
			color: #909399;
			line-height: 32rpx;
			padding-top: 22rpx;
		}
	}

	.Index {
		width: 100%;
		height: 100%;
	}
</style>