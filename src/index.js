import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

app.use(require('prerender-node').set('prerenderToken', 'dhnXwug0vTkauiCtNEtt'));

ReactDOM.render(
  <BrowserRouter basename="">
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>, document.getElementById('root')
);

serviceWorker.unregister();
