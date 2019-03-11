import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
class Test extends Component{
  render () { 
    return (
      <div className="test">
        <Link to="/">首页</Link>
      </div>
    )
  } 
}
export default Test;