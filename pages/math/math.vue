<script setup>
	import {
		onMounted,
		ref
	} from "vue";

	import navTab from '../../components/nav-bar/nav_tab.vue'
	const list_info = ref()
	const get_list = () => {
		uni.request({
			url: 'http://hexpect.cn:9001/att/getAllSpot',
			// url: '/api/att/getAllSpot',
			success(res) {
				// console.log(res.data.data);
				list_info.value = res.data.data
			},
			fail(err) {
				console.log('请求失败', err);
			},
			complete() {
				// console.log('请求完成');
			}
		})
	}
	onMounted(() => {
		get_list()
	})
	const go_info = (item) => {
		// console.log(item)
		// console.log(item);
		let jsonObj = JSON.stringify(item)
		uni.navigateTo({
			url: `jdinfo?item=${jsonObj}`
		})
	}
</script>
<template>
	<view>
		<navTab></navTab>
		<uni-section title="景点列表" type="line">
			<uni-list v-for="item in list_info">
				<uni-list-item :title="item.name" :note="item.dengji" showArrow :thumb="item.imag1" thumb-size="lg"
					rightText="详细" @click="go_info(item)" link />
			</uni-list>
		</uni-section>
	</view>
</template>
<style scoped>
</style>