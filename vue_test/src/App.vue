<template>
  <div id="app">
    <h1>App 组件</h1>
    <div class="tabs">
      <div class="tabItem" >Home组件</div>
      <div class="tabItem" >Personal组件</div>
    </div>
    <Home :getHomeData="getHomeData"></Home>
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
  errorCaptured(errObj, errVM, errMsg){
    console.log('----- errorCaptured App获取组件钩子函数------');
    // console.log(errObj.message);
    // console.log(errVM); // 错误组件实例
    // console.log(errMsg);

    // errVM === Home组件实例
    errVM.getHomeData(errVM.msg)

    return false // 阻止错误继续向上传播，并且不会在浏览器控制台抛出错误
  },
  methods: {
    getHomeData(data){
      console.log('Home组件传递给App的组件的数据： ', data);
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
