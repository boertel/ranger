import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';

import pictures from './pictures';
import order from './order';


export default combineReducers({
    routing: routerReducer,
    pictures,
    order,
})
