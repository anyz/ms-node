import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./app/Home";
import Donate from "./app/Donate";
import Quiz from "./app/Quiz";

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>

      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/donate" component={Donate} />
          
           
        </Switch>
      </BrowserRouter>

  </React.StrictMode>,
    document.getElementById('root')
);