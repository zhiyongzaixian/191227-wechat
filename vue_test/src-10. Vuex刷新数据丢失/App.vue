<template>
  <div id="app">
    <h1>App 组件</h1>
    <router-link to="/home">home链接</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/personal">personal链接</router-link>

    <br>
    <br>
    <br>
    <br>
    <br>
    <!-- 接收路由的容器 -->
    <router-view></router-view>
  </div>

</template>

<script>

export default {

}
</script>

<style lang="stylus">
  .tabs
    display flex
    .tabItem
      width 50%
      height 50px
      line-height 50px
      text-align center
      border 1px solid #eee
      box-sizing border-box
</style>
