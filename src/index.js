import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import Picture from './views/Picture';
import Introduction from './views/Introduction';
import End from './views/End';
import Favorites from './views/Favorites';
import NotFound from './views/NotFound';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import createStore from './store';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import reducers from './reducers';

const store = createStore(reducers);
const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Introduction} />
                <Route path="/picture/:index" component={Picture} />
                <Route path="/Favorites" component={Favorites} />
                <Route path="/end" component={End} />
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    </Provider>
),
    document.getElementById('root')
);
