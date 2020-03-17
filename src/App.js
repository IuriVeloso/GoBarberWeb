import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import './config/ReactotronConfig';
import histoy from '~/services/history';
import Routes from './routes/index';
import store from './store/index';

function App() {
    return (
        <Provider store={store}>
            <Router history={histoy}>
                <Routes />
                <GlobalStyle />
            </Router>
        </Provider>
    );
}

export default App;
