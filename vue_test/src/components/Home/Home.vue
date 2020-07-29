<template>
  <div>
    <h2>Home 组件</h2>
  </div>
</template>

<script>
  export default {
    props: ['getHomeData'],
    data(){
      return {
        msg: 'Home组件的初始化数据'
      }
    },
    mounted(){
      console.log(aaaa);
      this.getHomeData(this.msg)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
