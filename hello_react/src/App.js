import React from 'react'
import ReactDOM from 'react-dom'

// 定义组件： 1. class(有状态的)  2. 工厂函数模式(无状态的) 3. hooks(使用函数式编程，利用hooks可以操作状态state)
class App extends React.Component {
  state = {
    num: 1
  }
  constructor(props){
    super(props) // 调用父类的构造方法
  }
  
  // 用来取代willMount和willUpdate
  // static 修饰符 静态方法，使用static声明方法以后，该方法不会被实例化对象继承，而是类对象的方法
  static getDerivedStateFromProps(props, state){
    console.log('-------- getDerivedStateFromProps 组件将要更新--------');
    console.log(props);
    console.log(state);
    return null // 表示继续使用当前组件的状态值，不再更新
    // return { // 返回一个指定的对象，该对象中可以更新当前组件的状态数据
    //   num: 3333
    // }
  }
  
  componentWillMount(){
    console.log('-------- componentWillMount 组件将要挂载--------');
  }
  
  componentDidMount() {
    console.log('-------- componentDidMount 组件挂载完毕 --------');
    /*
    * setState修改状态
    *   1. 自身的钩子函数中： 异步
    *   2. 非自身的钩子函数中： 同步
    *
    * */
    // this.setState({
    //   num: 2
    // })
    //
    // console.log(this.state.num); // 1 异步
    setTimeout(() => {
      this.setState({
        num: 2
      })

      console.log(this.state.num); // 2 同步
    }, 2000)
    // 修改组件状态
    this.intervalId = setInterval(() => {
      console.log('interval()');
      this.setState({
        num: ++this.state.num
      })
    }, 1000)
    
    
    setTimeout(() => {
      // 卸载组件
      /*
      * React：
      *   1. 直接将之前插入到指定容器的DOM结构直接移除
      *   2. 页面上没有改内容
      * Vue:
      *   1. 销毁组件实例
      *   2. 切断页面和数据层的联系，页面最终保留的是组件卸载时候的状态
      *   3. 静态页面还在
      *
      * */
      ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }, 4000)
  }
  componentWillUpdate(){
    console.log('-------- componentWillMount 组件将要更新--------');
  }
  
  componentDidUpdate() {
    console.log('-------- componentWillMount 组件更新完毕 --------');
  }
  
  componentWillUnmount() {
    console.log('-------- componentWillMount 组件将要卸载 --------');
    // 守卫工作
    clearInterval(this.intervalId )
  }
  
  render(){
    return (
      <div>
        <h1>App 组件</h1>
        <p>{this.state.num}</p>
      </div>
    )
  }
}


export default App
