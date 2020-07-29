<template>
  <div>
    <h2>Home 组件</h2>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        msg: 'Home组件的初始化数据'
      }
    },
    computed: {
      ...mapState({
        initData: state => state.home.initData
      })
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
