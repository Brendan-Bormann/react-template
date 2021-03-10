import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

import ExamplePage from '../pages/_examplePage/examplePage';

class Router extends Component {
    constructor(props) {
        super(props);

        this.DefaultState = {}
        this.state = this.DefaultState;
    }

    render() {

        return (
            <React.Fragment>

                <Switch>

                    <Route exact path="/">
                        <h1>Home</h1>
                    </Route>

                    <Route exact path="/example">
                        <ExamplePage />
                    </Route>

                    <Route path="*">
                        <h1>404</h1>
                    </Route>

                </Switch>

            </React.Fragment>
        );
    }
}

export default Router;