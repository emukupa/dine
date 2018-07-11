import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import { Provider } from 'react-redux';

import logger from 'redux-logger';

import reducers from './reducers';

import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(applyMiddleware(logger, ReduxThunk));
const createStoreWithMiddleware = createStore(reducers, middleware);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
