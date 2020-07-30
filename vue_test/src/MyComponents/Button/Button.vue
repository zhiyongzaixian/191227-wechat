<template>
  <div>
    <button :class="type?type:''">按钮</button>
  </div>
</template>

<script>
  export default {
    props: ['type']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  button
    background #f0f
    width 200px
    height 60px
    line-height 60px
    text-align center
    border none
    &.danger
      background red
    &.primary
      background dodgerblue
</style>
