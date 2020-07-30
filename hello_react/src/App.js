import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Link, NavLink, Redirect, Switch} from 'react-router-dom'

import Home from './components/home/home'
import Personal from './components/personal/personal'
import Test from './components/test/test'
// 定义组件： 1. class(有状态的)  2. 工厂函数模式(无状态的) 3. hooks(使用函数式编程，利用hooks可以操作状态state)

import './app.css'
class App extends React.Component {
  render(){
    return (
      <div>
        <h1>App 组件</h1>
        {/* 路由链接 */}
        <NavLink to='/home/1231'>home链接</NavLink>&nbsp;
        <NavLink to='/personal?a=1&b=2'>personal链接</NavLink>
  
  
        <br/>
        <br/>
        <br/>
        {/* 注册路由 */}
        {/*
          react-router-dom
            1. 默认是模糊匹配，如果想要精准匹配，需要给Route标签添加一个属性 exact
            2. 默认每次匹配都会匹配所有注册路由
            3. 性能优化相关： Switch, 一旦有匹配成的路由就停止匹配
        */}
  
        <Switch>
          {/*<Route path='/' component={Test} ></Route>*/}
          
          {/*params传参 */}
          <Route path='/home/:id' component={Home}></Route>
          {/*<Route path='/personal' component={Personal}></Route>*/}
          
          {/* props 传参*/}
          <Route path='/personal' render={() => <Personal num={123}/>}></Route>
          <Redirect to='/home/1'></Redirect>
        </Switch>
        
      </div>
    )
  }
}


export default App
