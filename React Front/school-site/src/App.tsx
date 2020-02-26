import React, { Component } from 'react';
import './App.css';
import Login from './Pages/Login/Login'
import Main from './Pages/Main/Main'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  
  render() {
    return (
        <div>
          <Main/>
          {/* <Router>
            <Switch>
              <Route path='/login'>
                <Login/>
              </Route>
              <Route path='/main'>
                <Main/>
              </Route>
            </Switch>
          </Router> */}
        </div>
      )
  }
 
}

export default App;
