<template>
	<view id="indexContainer">
		<view class="header">
			<image src="../../static/images/logo.png" mode=""></image>
			<view class="searchContainer">
				<input type="text" placeholder="搜索商品" placeholder-class='placeholder'/>
			</view>
			<button class="btn">登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="stylus">
	#indexContainer 
		.header
			display flex
			padding 10rpx 0
			image 
				width 140rpx
				height 40rpx
				margin 10rpx 20rpx
			.searchContainer
				width 420rpx
				height 60rpx
				background #ededed
				.placeholder
					font-size 26rpx
					text-align center
			.btn
				width 144rpx
				height 60rpx
				border-radius 4rpx
				padding 0 4rpx
				font-size 24rpx
				text-align center
				line-height 60rpx
				margin 0 10rpx
				color #BB2C08



.test
	font-size 0
</style>
