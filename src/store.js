import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import analytics from './analytics';

var logger = createLogger({
    predicate: () => true,
    collapsed: true,
    duration: true,
});

const router = routerMiddleware(browserHistory);
export default applyMiddleware(router, thunk, logger, analytics)(createStore)
