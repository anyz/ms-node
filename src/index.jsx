import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./app/Home";
import Donate from "./app/Donate";

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>

      <BrowserRouter>
        <Switch>
          <Route path="/donate">
            <Donate />
          </Route>   
          <Route path="/">
            <Home />
          </Route>                 
        </Switch>
      </BrowserRouter>

  </React.StrictMode>,
    document.getElementById('root')
);