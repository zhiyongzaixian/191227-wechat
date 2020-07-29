<template>
  <div>
    <h2>Personal 组件</h2>
    <p>{{personalMsg}}</p>
  </div>
</template>

<script>
  export default {
    props: ['personalMsg'],
    mounted(){
      console.log('Personal mounted');
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
