// import React from 'react'
// import { render } from 'react-dom'
// import Library from './Library'

// let bookList = [
// 	{"title": "Hunger", "author": "Roxane Gay", "pages": 320},
// 	{"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
// 	{"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
// 	{"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
// ]

// render(
// 	<Library books={bookList} />, 
// 	document.getElementById('root')
// )

import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import rootReducer from './app/store'
import AppComponent from './app/components/App';

const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(rootReducer, middleware);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<AppComponent />
		</BrowserRouter>
	</Provider>, document.getElementById('root'));
