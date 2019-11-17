import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store/reducers';

import './index.css';
import App from './App';

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunkMiddleware))
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root')
);