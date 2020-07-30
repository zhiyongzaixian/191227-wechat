<template>
  <div id="app">
    <h1>App 组件</h1>
    <router-link to="/home">home链接</router-link>&nbsp;
    <!-- 静态路由 -->

    <!--params参数-->
    <!--<router-link to="/personal/123">personal链接</router-link>&nbsp;-->
    <!-- query参数 -->
    <!--<router-link to="/cart?id=234">cart链接</router-link>-->

    <!-- 动态路由 -->
    <!--params参数: params + name -->
    <router-link :to="{name: 'personal', params: {id: 345, a: 'abc', b: 456}}">personal链接</router-link>&nbsp;
    <!--<router-link :to="{path: '/personal', params: {id: 345}}">personal链接</router-link>&nbsp;-->

    <!-- 面试题： params + path ? query + name?-->
    <!-- 答案： query + name || path 没问题， params + name没问题 -->

    <!-- query参数 query + path -->
    <!--<router-link :to="{path: '/cart', query: {a: 123, b: 234}}">cart链接</router-link>-->
    <router-link :to="{name: 'cart', query: {a: 123, b: 234}}">cart链接</router-link>
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
