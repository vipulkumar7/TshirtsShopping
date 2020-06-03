import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Cart from './components/Cart'
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/cart' component={Cart} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
