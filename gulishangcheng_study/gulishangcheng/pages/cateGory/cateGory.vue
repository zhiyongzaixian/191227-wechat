<template>
	<view class="cateGoryContainer">
		<view class="header">
			<view class="search">
				搜索商品
			</view>
		</view>
		<view class="content">
			<view class="leftContainer">
				
			</view>
			<view class="rightContainer">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="stylus">
	.cateGoryContainer
		.header
			padding 10rpx 0
			.search
				width 90%
				height 60rpx
				line-height 60rpx
				text-align center
				font-size 26rpx
				background #eee
				margin 0 auto
				
				
				
		.content
			display flex
			height calc(100vh - 80rpx)
			border-top 1rpx solid #eee
			box-sizing border-box
			.leftContainer
				width 20%
				border-right 1rpx solid #EEEEEE
				box-sizing border-box
			.rightContainer
				width 80%




.test
	font-size 0
</style>
