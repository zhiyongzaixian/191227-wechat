<template>
	<view class="cateGoryContainer">
		<view class="header">
			<view class="search">
				搜索商品
			</view>
		</view>
		<view class="content">
			<view class="leftContainer">
				<scroll-view scroll-y="true" class="scrollContainer" >
					<view class="navItem " @click="changeNavIndex(navItem.id)" :class="{active: navIndex === navItem.id}" v-for="(navItem, index) in cateGoryList" :key='index'>
						{{navItem.name}}
					</view>
				</scroll-view>
			</view>
			<view class="rightContainer">
				<scroll-view scroll-y="true" class='scrollContainer'>
					<view class="proList">
						<image class="proImg" :src="cateGoryObj.imgUrl" mode=""></image>
						<view class="proItem" v-for="(item, index) in cateGoryObj.subCateList" :key='index'>
							<image :src="item.wapBannerUrl" mode=""></image>
							<text>{{item.name}}</text>
						</view>
					</view>
					
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	export default {
		data() {
			return {
				cateGoryList: [], // 分类页数据
				navIndex: 0, // 导航标识id
			};
		},
		async mounted() {
			let cateGoryListData = await request('/getCateGoryData')
			this.cateGoryList = cateGoryListData.data
			this.navIndex = this.cateGoryList[0].id
		},
		methods: {
			changeNavIndex(navIndex){
				this.navIndex = navIndex
			}
		},
		computed: {
			cateGoryObj(){
				/* 
					filter: 过滤，根据指定的条件返回条件为true的元素，filter会遍历整个数组
				  find: 查找，根据指定条件返回条件为true的元素, 找到符合条件的元素就停止遍历
				 
				 */
				return this.cateGoryList.find(item =>  item.id === this.navIndex)
			}
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
				.scrollContainer
					height 100%
					.navItem
						position relative
						font-size 26rpx
						text-align center
						height 80rpx
						line-height 80rpx
						&.active:after
							content ''
							height 70%
							width 2rpx
							position absolute
							top 15%
							left 8rpx
							background #BB2C08
						
			.rightContainer
				width 80%
				.scrollContainer
					height 100%
					width 100%
					.proList
						display flex
						width 100%
						flex-wrap wrap
						.proImg
							width 520rpx
							height 190rpx
							margin 20rpx auto
						.proItem
							width 33.333%
							display flex
							flex-direction column
							align-items center
							image
								width 90%
								height 144rpx
							text
								font-size 24rpx
								text-align center




.test
	font-size 0
</style>
