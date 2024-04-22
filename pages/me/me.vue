<template>
  <view class="Index">
    <!-- 瀑布流布局列表 -->
    <view class="pubuBox">
      <view class="pubuItem">
        <view class="item-masonry" v-for="(item, index) in comList" :key="index">
          <image :src="item.img" mode="widthFix"></image>
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
const comList = [
  {
    img: "https://img2.baidu.com/it/u=3853345508,384760633&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1689958800&t=210689b7eb06d7c78958d7063151cba6",
    name: '商品的名称，可以很长很长...',
  },
  {
    img: 'https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1689958800&t=d6764859a9740bb4aead7703daa61876',
    name: '商品名称会在超出两行时候自动折叠',
  },
  {
    img: 'https://img0.baidu.com/it/u=1604010673,2427861166&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1689958800&t=2e255208580c0570167a800344d3aa59',
    name: '只有一行标题时高度为39',
    commdityPrice: 100
  },
  {
    img: 'https://img0.baidu.com/it/u=2627496060,1933351908&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1689958800&t=fd7a89ad586d338543b6916df7083e4f',
    name: '具体样式您可以自定义',
  },
  {
    img: 'https://img2.baidu.com/it/u=3853345508,384760633&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1689958800&t=210689b7eb06d7c78958d7063151cba6',
    name: 'vue的H5页面也是如此使用',
  }
]; //商品列表
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
