<template>
	<view id="indexContainer">
		<!-- 头部区域 -->
		<view class="header">
			<image src="../../static/images/logo.png" mode=""></image>
			<view class="searchContainer">
				<i class='iconfont icon-sousuo'></i>
				<input type="text" placeholder="搜索商品" placeholder-class='placeholder'/>
			</view>
			<button class="btn">登录</button>
		</view>
	
		<!-- 导航区域 -->
		<scroll-view enable-flex scroll-x="true" class="navScroll" v-if="indexData.kingKongModule">
			<view class="navItem " @click="changeNavId(0)" :class="{active: navId === 0}">
				推荐
			</view>
			<view  @click="changeNavId((index + 1))" :class="{active: navId === (index + 1)}" class="navItem " v-for="(navItem, index) in indexData.kingKongModule.kingKongList" :key='index'>
				{{navItem.text}}
			</view>
		</scroll-view>
	
		<!-- 内容区 -->
		<Recommend></Recommend>
	</view>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	import request from '../../utils/request.js'
	import Recommend from '../../components/recommend/recommend.vue'
	export default {
		data(){
			return {
				navId: 0, // 导航的标识
			}
		},
		components: {
			Recommend
		},
		async mounted() {
			// console.log(this.$store.state.index.initData)
			// 分发action
			this.getIndexData();
		},
		methods:{
			...mapActions({
				getIndexData: 'getIndexData'
			}),
			changeNavId(navId){
				this.navId = navId
			}
		},
		computed: {
			...mapState({
				indexData: state => state.index.indexData
			})
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
				position relative
				width 420rpx
				height 60rpx
				background #ededed
				.iconfont 
					font-size 30rpx
					position absolute
					top 25%
					left 10rpx
				input
					width 380rpx
					height 60rpx
					margin-left 50rpx
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



		
		.navScroll
			white-space nowrap
			width 100%
			height 80rpx
			.navItem
				position relative
				display inline-block
				width 140rpx
				height 80rpx
				text-align center
				line-height 80rpx
				font-size 28rpx
				/* & 父级引用： &在子元素的位置通过引用关系指向父级元素 */
				&.active:after
					content ''
					height 1rpx
					width 100%
					position absolute
					bottom 0
					left 0
					background #BB2C08

</style>
