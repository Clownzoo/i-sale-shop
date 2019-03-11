import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {
  Link
} from 'react-router-dom';
@inject('homeMod')
@observer
class Home extends Component{
  constructor(props, context) {
    super(props, context);
    this.stores = this.props.homeMod;
  }
  componentDidMount () {
    const { hello } = this.stores.state;
    console.log(hello)
  }
  render () { 
    return (
      <div className="home">
        <img src="http://5b0988e595225.cdn.sohucs.com/images/20180529/904df3d719544c2a91550b20b6a30c44.jpeg"/>
        <Link to="/test">测试</Link>
      </div>
    )
  } 
}
export default Home;