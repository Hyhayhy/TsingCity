<template>
	<view class="Index bg">
		<navTab></navTab>
		<view class="pubuBox">
			<view class="pubuItem">
				<view class="item-masonry" v-for="(item, index) in comList" :key="index">
					<image :src="item.iurl" mode="widthFix" @click="showFullscreen(item.iurl)"></image>
					<view class="listtitle">
						<view class="listtitle3">{{ item.name }}</view>
					</view>
					<!-- 添加心形收藏按钮 -->
					<div class="fullscreen-heart">
						<image :src="item.isFavorite ?  '../../static/favorite-empty.png':'../../static/favorite-filled.png'"
							class="heart-icon" @click="toggleFavorite(item)"></image>
					</div>

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
	
	const comList = ref([]); //商品列表

	const get_usr_list = () => {
		uni.request({
			url: 'http://101.42.249.157:9001/favorite/'+store.$state.uid,
			success(res) {
				comList.value = res.data.data;
			}
		})
	}

	onMounted(() => {
		get_usr_list();
	})


	const toggleFavorite = (item) => {
		// console.log(item);
		item.isFavorite = !item.isFavorite;
		// 处理收藏逻辑
		if (!item.isFavorite) {
			// console.log( store.$state.uid);
			console.log('收藏成功');
		} else {
			console.log('取消收藏成功', item.name);
			uni.request({
				url:'http://101.42.249.157:9001/favorites/uid='+store.$state.uid+'/sid='+item.ispot+'/iid='+item.iid,
				method:"DELETE",
				success(res) {
					// console.log(res);
				}
			})
		}
	};

	const showFullscreen = (imageUrl) => {
		console.log(imageUrl);
		uni.previewImage({
			urls: [imageUrl],
			showmenu:true,
			success: () => {}
		});
	};
	onMounted(()=>{
		
	})
</script>

<style scoped lang="scss">
	
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
		box-sizing: border-box;
		margin-bottom: 20rpx;
		box-shadow: 0px 0px 28rpx 1rpx rgba(78, 101, 153, 0.14);
		cursor: pointer; // 添加指针样式
		position: relative; // 相对定位
	}

	.item-masonry image {
		width: 100%;
	}

	.listtitle {
		padding-left: 22rpx;
		font-size: 24rpx;
		padding-bottom: 22rpx;

		.listtitle3 {
			font-size: 28rpx;
			color: #909399;
			line-height: 32rpx;
			padding-top: 22rpx;
		}
	}

	.fullscreen-heart {
	        position: absolute;
	        // top: 20px;
			bottom: 5vh;
	        right: 2px;
	        z-index: 998;
	        cursor: pointer;
	    }
	
	    .fullscreen-heart image {
	        width: 40px;
	        height: 40px;
	    }
</style>