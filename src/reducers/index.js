import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';

import pictures from './pictures';
import order from './order';
import user from './user';
import photographs from './photographs';
import loading from './loading';


export default combineReducers({
    routing: routerReducer,
    pictures,
    order,
    photographs,
    user,
    loading,
})
