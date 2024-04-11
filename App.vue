<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			uni.hideTabBar()
		},
		onHide: function() {
			console.log('App Hide')
		},
		
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	html,
	body {
	  padding: 0;
	  margin: 0;
	  height: 100%;
	  width: 100%;
	}
	
	view{
		box-sizing: border-box;
	}
</style>
