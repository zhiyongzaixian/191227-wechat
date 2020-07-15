<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="stylus">
	/*每个页面公共css */
	/* stylus引入样式：@import url(路径) */
	@import url("./static/iconfont/iconfont.styl");
	page 
		height 100%
</style>
