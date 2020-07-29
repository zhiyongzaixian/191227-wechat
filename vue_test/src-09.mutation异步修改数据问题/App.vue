<template>
  <div id="app">
    <h1>App 组件</h1>
    <Home></Home>
  </div>

</template>

<script>

import Home from './components/Home/Home'
import Personal from './components/Personal/Personal'
export default {
  components: {
    Home,
    Personal
  },
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
