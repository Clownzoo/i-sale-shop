import React from 'react';
import ReactDOM from 'react-dom';
import RouterMap from './router/routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouterMap />, document.getElementById('root'));
registerServiceWorker();
