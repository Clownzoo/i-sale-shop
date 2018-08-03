import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

@inject("TestMod")
@observer
class TestView extends Component{

  constructor(props, context) {
    super(props, context);
    this.TestModStore = this.props.TestMod;
    this.state = {
      test: 'hello_world'
    };
  }

  changeHello () {
    this.TestModStore.changeHello('您已经改变了');
  }

  render () {
    return (
      <div className='test'>
        <span>{this.TestModStore.state.hello}</span>
        <button onClick={ this.changeHello.bind(this) }>点击改变store状态</button>
      </div>
    )
  }
}

export default TestView;