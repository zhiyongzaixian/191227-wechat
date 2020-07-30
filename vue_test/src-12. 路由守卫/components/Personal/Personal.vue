<template>
  <div>
    <h2>Personal 组件</h2>
    <p>params参数id： {{$route.params.id}}</p>
    <p>params参数a： {{$route.params.a}}</p>
    <p>params参数b： {{$route.params.b}}</p>
    <!--<p>props参数布尔值： {{id}}</p>-->
    <p>props参数对象的模式： {{msg}}----- {{a}}</p>

  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
    // props: ['id'], // 布尔值
    props: ['msg', 'a'],
    data(){
      return {

      }
    },
    computed: {
      ...mapState({
        personArr: state => state.home.personArr
      })
    },
    mounted(){
      // beforeunload 页面即将刷新之前调用
      window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('test2', JSON.stringify(this.personArr))
      })


      // 读取sessionStorage中是否有之前缓存的数据
      let personArr = sessionStorage.getItem('test2')
      console.log(personArr);
      // 如果有： 更新Vuex中状态数据
      personArr && this.changePersonArrMutation(JSON.parse(personArr))
    },
    methods: {
      ...mapMutations({
        changePersonArrMutation: 'changePersonArrMutation'
      })
    },
    beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 beforeRouteLeave，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      console.log('----- beforeRouteUpdate 当前路由即将更新 -------');
      next()
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
