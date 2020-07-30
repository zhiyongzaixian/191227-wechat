<template>
  <div>
    <h2>Home 组件</h2>
    <p>meta参数： {{$route.meta.isShowFooter}}</p>
    <ul>
      <li v-for="(item, index) in personArr" :key="index">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
    data(){
      return {
        msg: 'Home组件的初始化数据'
      }
    },
    mounted(){
      setTimeout(() => {
        const personArr = [
          {
            name: 'kobe'
          },
          {
            name: 'wade'
          }
        ]
        // 同步修改测试案例
        this.changePersonArrMutation(personArr)
        // 异步修改
        // this.changePersonArrMutation(123)

      }, 1000)

    },
    computed: {
      ...mapState({
        initData: state => state.home.initData,
        personArr: state => state.home.personArr
      })
    },
    methods: {
      ...mapMutations({
        changePersonArrMutation: 'changePersonArrMutation'
      })
    },
    beforeRouteEnter (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      console.log('----- beforeRouteEnter 当前路由即将被确认 -------');
      console.log(this);
      next()

    },
    beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 beforeRouteLeave，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      console.log('----- beforeRouteUpdate 当前路由即将更新 -------');

    },
    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      console.log('----- beforeRouteLeave 即将离开当前路由 -------');
      next()
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
