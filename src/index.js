import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './reducers/index'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import  thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const middleware = [thunk];

// Chỉ log tất cả các action ra ở môi trường development, còn ở môi trường production thì không
if(process.env.NODE_ENV !== "production"){
  middleware.push(createLogger());
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

