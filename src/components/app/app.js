import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import ShopHeader from '../shop-header/';

class App extends Component {
    render() {

        return (
            <main>
                <ShopHeader numItem={5} total={250} />
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/cart" component={CartPage} />
                </Switch>
            </main>
        )

    }
}

export default App;