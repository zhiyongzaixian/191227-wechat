<template>
  <div>
    <h2>Home 组件</h2>
    <button @click="handleClick">触发自定义事件</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        msg: 'Home组件的初始化数据'
      }
    },
    mounted(){
      /*
      * 自定义事件
      *   1. 绑定事件和触发事件的事件名必须一致
      *   2. 绑定事件的时机必须早于触发事件
      *   3. 绑定事件的一方一定有回调，需要通过回调通知事件被触发了
      *   4. 触发的事件的时候应该提供数据供绑定者使用
      *
      * */
      console.log('Home 子 mounted');
      this.$Bus.$emit('myEvent', 'abc')
    },
    methods: {
      handleClick(){
        this.$emit('myEvent', {msg: 'abc'})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
