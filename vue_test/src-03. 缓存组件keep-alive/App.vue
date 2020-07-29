<template>
  <div id="app">
    <h1>App 组件</h1>
    <div class="tabs">
      <div class="tabItem" @click="changeTab('Home')">Home组件</div>
      <div class="tabItem" @click="changeTab('Personal')">Personal组件</div>
    </div>

    <keep-alive :include="['Personal']">
      <component :is="comName" homeMsg='"我是传递给home的数据"' personalMsg="我是传递给personal的数据"></component>
    </keep-alive>

    <!--<Home ></Home>-->
    <!--<Personal></Personal>-->
  </div>

</template>

<script>
import Home from './components/Home/Home'
import Personal from './components/Personal/Personal'
export default {
  data(){
    return {
      comName: 'Home'
    }
  },
  components: {
    'Home': Home,
    'Personal': Personal,
  },
  methods: {
    changeTab(comName){
      this.comName = comName
    }
  }
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
