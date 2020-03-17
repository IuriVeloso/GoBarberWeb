import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import './config/ReactotronConfig';
import histoy from '~/services/history';
import Routes from './routes/index';

function App() {
    return (
        <Router history={histoy}>
            <Routes />
            <GlobalStyle />
        </Router>
    );
}

export default App;
