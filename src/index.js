import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import Picture from './views/Picture';
import Introduction from './views/Introduction';
import End from './views/End';
import NotFound from './views/NotFound';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import createStore from './store';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducers from './reducers';



const store = createStore(reducers, autoRehydrate());
//persistStore(store, {blacklist: ['routing']});

const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Introduction} />
                <Route path="/picture/:index" component={Picture} />
                <Route path="/end" component={End} />
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    </Provider>
),
    document.getElementById('root')
);
