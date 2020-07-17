<template>
	<view class="recommendCateGoryContainer">
		<view class="cateGoryItem" v-for="(item, index) in indexData.categoryModule" :key='index'>
			<image class='cateImg' :src="item.titlePicUrl" mode=""></image>
			<scroll-view scroll-x="true" class="scrollContainer" >
				<view class="scrollItem" v-for='(scrollItem, index) in item.itemList' :key='index'>
					<image :src="scrollItem.showPicUrl" mode=""></image>
					<view>{{scrollItem.name}}</view>
				</view>
				
				<view class="scrollItem more">
					查看更多>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		computed: {
			...mapState({
				indexData: state => state.index.indexData
			})
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.cateGoryItem
		.cateImg
			width 100%
			height 370rpx
		.scrollContainer
			width 100%
			white-space nowrap
			.scrollItem
				width 200rpx
				display inline-block
				margin 20rpx 10rpx
				vertical-align top
				&.more
					height 200rpx
					background #EEEEEE
					text-align center
					line-height 200rpx
					font-size 26rpx
				image
					width 200rpx
					height 200rpx
					border-radius 10rpx
					background #eee
				view
					font-size 24rpx
					white-space pre-wrap
					display -webkit-box
					-webkit-line-clamp 2
					-webkit-box-orient vertical
					overflow hidden
</style>
