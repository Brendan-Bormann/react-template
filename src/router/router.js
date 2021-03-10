import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

import ExamplePage from '../pages/_ExamplePage/ExamplePage';
import HomePage from '../pages/HomePage/HomePage';
import Template from '../pages/Template/Template';

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
                        <Template title="Home">
                            <HomePage />
                        </Template>
                    </Route>

                    <Route exact path="/example">
                        <Template title="Example">
                            <ExamplePage />
                        </Template>
                    </Route>

                    <Route path="*">
                        <Template title="404">
                            <h1>404</h1>
                        </Template>
                    </Route>

                </Switch>

            </React.Fragment>
        );
    }
}

export default Router;