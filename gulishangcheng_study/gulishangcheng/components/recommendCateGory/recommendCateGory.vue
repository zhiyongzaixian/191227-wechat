<template>
	<view class="recommendCateGoryContainer">
		<view class="cateGoryItem" v-for="(item, index) in indexData.categoryModule" :key='index'>
			<image :src="item.titlePicUrl" mode=""></image>
			<scroll-view scroll-x="true" class="scrollContainer">
				<view class="scrollItem" v-for='(scrollItem, index) in item.itemList' :key='index'>
					<image :src="scrollItem.showPicUrl" mode=""></image>
					<text>{{scrollItem.name}}</text>
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
	
</style>
