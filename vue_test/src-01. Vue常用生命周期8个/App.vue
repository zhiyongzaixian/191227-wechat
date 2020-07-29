<template>
  <div id="app">
    <h1>App 组件</h1>
    <p>{{num}}</p>

  </div>
</template>

<script>

export default {
  data(){
    return {
      msg: '初始化的数据',
      num: 1
    }
  },
  /* CMUD*/
  beforeCreate(){
    console.log('------ beforeCreate 数据监测，事件监测之前------');
    // 没有实现数据劫持代理
    console.log(this);
    console.log(this.msg); // undefined

    // 面试题1： 在beforeCreate中如何获取data中的数据值
    console.log(this.$options.data().msg);

    console.log(this.$el);
  },
  created(){
    console.log('------ created ------');
    // 已经实现了数据劫持代理
    console.log(this.msg); // 有初始化的值
    console.log(this.$el);
    // 可以发送ajax请求，场景： 要求页面显示的时候数据就展示给用户，
  },
  beforeMount(){
    console.log('------ beforeMount 组件将要挂载 ------');
    console.log(this.$el);

  },
  mounted(){
    // debugger;
    console.log('------ mounted 组件挂载完毕------');
    // 通常在此发送异步请求，不影响首屏渲染，但不是绝对的
    // 面试题2： $el什么时候可见
    // $el：element $el代表将虚拟DOM对象编译后的真实DOM对象片段
    console.log(this.$el);

    this.invervalId = setInterval(() => {
      console.log('interval()');
      this.num++
    }, 1000)

    setTimeout(() => {
      // 销毁组件实例
      this.$destroy()
    }, 3000)

  },
  beforeUpdate(){
    console.log('------ beforeUpdate ------');

  },
  updated(){
    console.log('------ updated ------');

  },
  beforeDestroy(){
    console.log('------ beforeDestroy ------');
    /*
    * Vue销毁：
    *   1. 销毁的是Vue的组件实例
    *   2. 页面的动态数据在Vue组件实例销毁的一瞬间使用其最后的数据
    *   3. 切断了视图层和数据层的关联
    *
    * */
    // 做一些收尾的工作，如： 关闭定时器，释放内存，清除缓存
    clearInterval(this.invervalId)
  },
  destroyed(){
    console.log('------ destroyed ------');
  },
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
