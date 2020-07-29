<template>
  <div id="app">
    <h1>App 组件</h1>
    <Home ref="home"></Home>
    <!--<Personal></Personal>-->
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
  data(){
    return {

    }
  },
  beforeMount(){
    console.log('App 父 beforeMount');
    // console.log(this.$refs);
    // console.log(this.$refs.home);
    // 注意： 在mounted之前无法获取$refs的值，对应的是undefined
    // this.$refs.home.$on('myEvent', (msg) => {
    //   console.log('子组件Home绑定的事件', msg);
    // })
    console.log(this);
    this.$Bus.$on('myEvent', (msg) => {
      console.log('子组件Home绑定的事件', msg);
    })
  },
  mounted(){
    // 注意： 绑定事件和触发事件的对象必须是同一个对象
    // this.$on('myEvent', (msg) => {
    //   console.log('父组件绑定的事件', msg);
    // })
    // 将事件绑定在子组件Home身上

    console.log('App 父 mounted');
    // this.$refs.home.$on('myEvent', (msg) => {
    //   console.log('子组件Home绑定的事件', msg);
    // })
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
