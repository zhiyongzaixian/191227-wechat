<template>
  <div>
    <h2>Personal 组件</h2>

    <p>firstName: {{user.firstName}}</p>
    <slot :user="user"></slot>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        user: {
          firstName: 'kobe',
          lastName: 'bryant'
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
