import React from 'react';
import { Router } from 'react-router-dom';

import histoy from './services/history';
import Routes from './routes/index';

function App() {
    return (
        <Router history={histoy}>
            <Routes />
        </Router>
    );
}

export default App;
