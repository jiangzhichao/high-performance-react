import React from 'react';
import { Route, Switch, Redirect, HashRouter as Router } from 'react-router-dom';
import {
    App,
    About,
    Home,
} from 'containers';

export default () => (
    <Router>
        <Route render={props => (
            <App {...props}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Redirect to="/" />
                </Switch>
            </App>
        )} />
    </Router>
);
