import React, { Component } from 'react';
import {  Route, Switch,  BrowserRouter as Router } from "react-router-dom";

import { Home } from './views/index';

class App extends Component{ 
    state = {
        load: false
    }
        
    render(){
      return ( 
        <Router>
            <Switch> 
                <Route path="/" component={Home} />
            </Switch>
        </Router>
      );
    }
}

export default App;