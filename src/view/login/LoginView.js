import React, { Component } from 'react';
class Login extends Component{
  
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    console.log(this.props)
  }

  render () {
    return (
      <div className="home">这个是登录</div>
    )
  }
}
export default Login;