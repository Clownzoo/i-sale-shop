import React, { Component } from 'react';
import routerMap from './routerMap';
import { Provider } from "mobx-react";
import Stores from '../store/index';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
class RouterMap extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <Provider {...Stores}>
        <HashRouter>
          <Switch>
            {
              routerMap.map((value, index) => (
                <Route
                  key={index}
                  path={value.path}
                  exact={value.exact}
                  component={value.component} />
              ))
            }
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}
export default RouterMap;