import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';
import SignIn from '~/pages/SignIn/index';
import SignUp from '../pages/SignUp/index';
import Dashboard from '../pages/Dashboard/index';
import Profile from '../pages/Profile/index';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={SignUp} />
            <Route path="/profile" component={Profile} isPrivate />
            <Route path="/dashboard" component={Dashboard} isPrivate />
        </Switch>
    );
}
