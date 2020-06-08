import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import './App.css';
import App1 from './App1';
import Login from './components/Login';

import SignUp from './components/SignUp';


class App extends React.Component {
    render(){
    return (
        <div>
        <Router>
          <Switch>
          <Route exact path='/' component={App1}></Route>
            <Route exact path='/signin' component={Login}></Route>
            <Route exact path="/signup" component={SignUp}></Route>
            <Route exact path="*"  component={App1}></Route>
          </Switch>
        </Router>
        </div>
    );
    }
}

export default App;
