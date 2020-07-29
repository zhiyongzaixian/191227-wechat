<template>
  <div>
    <h2>Personal 组件</h2>
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
