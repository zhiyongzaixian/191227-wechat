<template>
	<view class="recommendContainer">
		<swiper class="banner" indicator-dots indicator-color='green' indicator-active-color='pink'>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/da67541e53669b388b8c664797549096.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/e1d32c538a9fcf420411592746098ad2.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/aeb01490aee3a747325725ddc06150d6.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/668b5187e5a7c283ca8bb5695d3e87f0.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
	
		<!-- policyDescList区域 -->
		<view class="policyDescList">
			<view class="policyDescItem" v-for="(item, index) in indexData.policyDescList" :key='index'>
				<image :src="item.icon" mode=""></image>
				<text>{{item.desc}}</text>
			</view>
		</view>
		
		<!-- kingKongList 10个图标区域 -->
		<view class="kingKongList">
			<view class="kingKongItem" v-for="(item, index) in indexData.kingKongModule.kingKongList" :key='index'>
				<image :src="item.picUrl" mode=""></image>
				<text>{{item.text}}</text>
			</view>
		</view>
	
	
		<!-- 分类列表区 -->
		<RecommendCateGory></RecommendCateGory>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	import RecommendCateGory from '../recommendCateGory/recommendCateGory.vue'
	export default {
		components:{
			RecommendCateGory
		},
		computed: {
			...mapState({
				indexData: state => state.index.indexData
			})
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.recommendContainer
		.banner
			width 100%
			height 350rpx
			.swiper-item
				width 100%
				height 100%
				image 
					width 100%
					height 100%


		.policyDescList
			display flex
			.policyDescItem
				flex 1 /*会自动平均分配整个宽度*/
				text-align center
				image
					width 32rpx
					height 32rpx
					vertical-align middle
				text
					font-size 24rpx
					vertical-align middle
					
		.kingKongList
			display flex
			flex-wrap wrap
			.kingKongItem
				width 20%
				display flex
				flex-direction column
				align-items center
				image
					width 110rpx
					height 110rpx
				text
					font-size 24rpx
					line-height 50rpx
					
</style>
