<template>
  <div>
    <h2>Home 组件</h2>
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
        // this.changePersonArrMutation(personArr)
        // 异步修改
        this.changePersonArrMutation(123)

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
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
