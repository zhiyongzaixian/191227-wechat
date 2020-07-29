<template>
  <div id="app">
    <h1>App 组件</h1>
    <Home ref="home">
      <template v-slot:left>
        <p>我是左护法</p>
      </template>
      <template v-slot:right>
        <p>我是右护法</p>
      </template>

      <p>我不知道保护谁</p>
    </Home>
    <br>
    <br>
    <br>
    <Personal></Personal>
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
