<template>
	<view>
		<div class="wrapper">
		  <div class="navbar">
		    <i class="fas fa-home icon-home"></i>
		    <i class="fas fa-cog icon-settings"></i>
		
		    <div class="circle">
		      <i class="fas fa-plus plus-icon"></i>
		    </div>
		    <div class="circleBackground"></div>
		  </div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
		}
	}}
</script>

<style lang="scss">
	
	
	$navbar-height: 100px;
	$circle-radius: 80px;
	$backgroundColor: rgb(253, 192, 223);

	.wrapper {
	  height: 100%;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  background-color: $backgroundColor;
	}
	
	.navbar {
	  position: fixed;
	  bottom: env(safe-area-inset-bottom);
	  height: $navbar-height;
	  min-width: 400px;
	  padding-left: 35px;
	  padding-right: 35px;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  border-radius: 25px;
	  background-color: white;
	  box-shadow: 0 10px 20px rgba(82, 74, 74, 0.3);
	}
	
	.circle {
	  position: absolute;
	  left: 50%;
	  transform: translateX(-50%);
	  bottom: calc(100px - ($circle-radius / 2));
	  margin-bottom: 0;
	  height: $circle-radius;
	  width: $circle-radius;
	  border-radius: 40px;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  overflow: hidden;
	  background-color: rgb(255, 94, 0);
	  z-index: 9;
	  box-shadow: 0 5px 5px rgba(255, 147, 85, 0.35);
	  transition: height 0.3s;
	}
	
	.circleBackground {
	  position: absolute;
	  left: 50%;
	  transform: translateX(-50%);
	  bottom: calc(100px - #{$circle-radius + 20} / 2);
	  margin-bottom: 0;
	  height: calc(#{$circle-radius} + 20px);
	  width: calc(#{$circle-radius} + 20px);
	  border-radius: calc(#{$circle-radius + 20} / 2);
	  background-color: $backgroundColor;
	}
	
</style>