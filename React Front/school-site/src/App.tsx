import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Login/Login'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {
  
  render() {
    console.log('Version: ', React.version)
    return (
      <Router>
      <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='/'>Univa</a>
        <ul className='navbar-nav mr-auto'>
          <div className='nav-buttons'>
            <li className='nav-item active'>
              <a href='/' className='btn btn-outline-dark'>Buscar</a>
            </li>
          </div>
        </ul>
      </nav>
      <div className='page-header'>
        <h2>Sistema de Informacion sobre tu Carrera</h2>
      </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
        /* <div>
          <NavBar/>
          <Router>
          <Switch>
            <Route path ='/' component ={Login} />
            <Route path ='/StudentInformation' component={StudentInformation} />
          </Switch>
          </Router>
        </div> */
      )
  }
}

export default App;
