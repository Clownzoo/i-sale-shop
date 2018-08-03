import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import Bundle from '../util/Bundle.jsx';
import { Provider } from "mobx-react";
import Stores from '../store/index';
class RouterMap extends Component{
  render () {
    return (
      <Provider {...Stores}>
        <Router>
          <Route path={'/'} render={() => {
            return (
              // 测试demo
              <Bundle load={() => import('../views/test/TestView')}>
                { (Test) => <Test /> }
              </Bundle>)
            }
          }/>
        </Router>
      </Provider>
    )
  }
}
export default RouterMap;