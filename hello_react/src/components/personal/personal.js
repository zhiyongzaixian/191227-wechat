import React from 'react'
import {Route, Link, NavLink} from 'react-router-dom'
import PersonalChild from './personalChild'
class Personal extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div>
        <h2>personal 组件</h2>
        <p>props参数： {this.props.num}</p>
        <br/>
        <br/>
        <Link to='/personal/personalChild'>PersonalChild 链接</Link>
        <Route path='/personal/personalChild' component={PersonalChild}></Route>

      </div>
    );
  }
}


export default Personal;
