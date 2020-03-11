import React, { Component } from 'react';
import './App.css';
import Login from './Pages/Login/Login'
import Main from './Pages/Main/Main'
import NavBar from './Components/Navbar/Navbar'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  
  render() {
    console.log('Version: ', React.version)
    return (
        <div>
          <NavBar/>
          {/* <Router>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='login'>Nombre Escuela</a>
        <ul className='navbar-nav mr-auto'>
          <div className='nav-buttons'>
            <li className='nav-item active'>
              <Link to='/login' type='button' className='btn btn-outline-dark'>Inicio</Link>
            </li>
          </div>
          <div className='nav-buttons'>
          </div>
        </ul>
      </nav>
      <Switch>
        <Route path='/login' component={Login} />
      </Switch>
      </Router> */}
      <Main/>
        </div>
      )
  }
 
}

export default App;
