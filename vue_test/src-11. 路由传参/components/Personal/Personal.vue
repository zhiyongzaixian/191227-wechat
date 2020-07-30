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
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
