import React from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div>
        <h2>home 组件</h2>
        <p>params参数: {this.props.match.params.id}</p>
      </div>
    );
  }
}


export default Home;
