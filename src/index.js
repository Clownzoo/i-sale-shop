import React from 'react';
import { render } from 'react-dom';
import App from 'router/index';
import "moment/locale/zh-cn";
import "./index.less";
render(
  <App />,
  document.getElementById('app')
);