<template>
  <div>
    <h2>Home 组件</h2>
    <p>{{homeMsg}}</p>
  </div>
</template>

<script>
  export default {
    props: ['homeMsg'],
    mounted(){
      console.log('Home mounted');
      console.log('发送请求获取最新的数据。。。');
    },
    activated () {
      console.log('---- activated 缓存组件Home被激活使用-----');
      /*
      * mounted 和 activated 的区别
      *   1. mounted 组件首次被挂载的时候调用，只执行一次
      *   2. activated 缓存组件Home被激活使用，会执行多次
      *   3. 开发使用场景：
      *     如： 使用keep-alive缓存的话，数据更新比较频繁，及时，此时需要多次发请求获取最新的数据，那么就不能再mounted发请求了，应该使用activated替代mounted
      *
      *
      * */
    },
    deactivated () {
      console.log('---- deactivated 缓存组件Home被停用-----');
      // 也可以用来做一些收尾的工作，替代destroyed
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
