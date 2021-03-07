import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
    } from "react-router-dom";

import Home from "./app/Home";

export default (
<Router>
    <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/">
            <Redirect to="/home"/>
        </Route>
        <Route component={Home}/>
    </Switch>
</Router>
);