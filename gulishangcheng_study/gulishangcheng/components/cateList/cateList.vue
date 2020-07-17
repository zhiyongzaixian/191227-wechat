<template>
	<view class="cateListContainer">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(swiperItem,index) in cateObj.category.bannerUrlList" :key='index'>
				<image :src="swiperItem" mode=""></image>
			</swiper-item>
		</swiper>
		
		<view class="common title">{{cateObj.category.name}}</view>
		<view class="common desc">{{cateObj.category.frontDesc}}</view>
		
		<!-- 列表区域 -->
		<view class="listContainer">
			<view class="cateItem" v-for="(cateItem, index) in cateObj.itemList" :key='index'>
				<image :src="cateItem.listPicUrl" mode=""></image>
				<text>{{cateItem.name}}</text>
				<text class="price">$ {{cateItem.retailPrice}}</text>
			</view>
			
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	export default {
		props: ['navId'],
		data() {
			return {
				cateList: []
			};
		},
		async mounted() {
			let cateListData = await request('/getIndexCateListData')
			this.cateList = cateListData.data
		},
		computed: {
			cateObj(){
				return this.cateList.find(item => item.category.parentId === this.navId)
			}
		}
	}
</script>

<style lang="stylus">
	.cateListContainer
		swiper
			width 100%
			height 370rpx
			image
				width 100%
				height 100%
		.common
			text-align center
			line-height 50rpx
			&.title 
				font-size 32rpx
				color #333333
			&.desc 
				font-size 26rpx
				color #999
		.listContainer
			display flex
			flex-wrap wrap
			justify-content space-around
			
			/*解决最后一个独立元素居中问题*/
			&:after
				content ''
				width 344rpx
				height 0
			.cateItem
				width 344rpx
				display flex
				flex-direction column
				image
					width 344rpx
					height 344rpx
				text
					font-size 26rpx
					line-height 50rpx
					&.price
						color red
				
					
				
</style>
