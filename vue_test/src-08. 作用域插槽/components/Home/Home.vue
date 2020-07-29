<template>
  <div>
    <h2>Home 组件</h2>
    <!--
      插槽使用场景： 向组件内部动态导入 标签数据
    -->
    <slot name="left"></slot>
    <br>
    <p>我是主公</p>
    <br>
    <slot name="right"></slot>

    <br>
    <br>
    <br>

    <!-- 插槽的默认值 -->
    <slot>我是插槽的默认值</slot>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        msg: 'Home组件的初始化数据'
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
