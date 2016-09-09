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
import {IntlProvider} from 'react-intl';

import {addLocaleData} from 'react-intl';
import fr from 'react-intl/locale-data/fr';
import en from 'react-intl/locale-data/en';

import reducers from './reducers';


addLocaleData([...en, ...fr]);
import messages from './messages';


const store = createStore(reducers, autoRehydrate());
persistStore(store, {blacklist: ['routing', 'photographs',]});

const history = syncHistoryWithStore(browserHistory, store);

let locale = 'en'
if (navigator.language.split('-')[0] === 'fr') {
    locale = 'fr';
}
const localizedMessages = messages[locale];

ReactDOM.render((
    <IntlProvider locale={navigator.language} messages={localizedMessages}>
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
    </IntlProvider>
),
    document.getElementById('root')
);
