import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import handleStylesReducer from './store/handleStylesReducer.js';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  combineReducers({
    handleStylesReducer,
  }),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('app')
);

// serviceWorker.register();
