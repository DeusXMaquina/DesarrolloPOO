import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Login/Login'
import StudentInformation from './Pages/Main/Main'
import NavBar from  './Components/Navbar/Navbar'
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


class App extends Component {
  
  render() {
    console.log('Version: ', React.version)
    return (
      <Router>
      <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='login'>Univa</a>
        <ul className='navbar-nav mr-auto'>
          <div className='nav-buttons'>
            <li className='nav-item active'>
              <Link to='/' className='btn btn-outline-dark'>Inicio</Link>
            </li>
          </div>
          <div className='nav-buttons'>
            <li className='nav-item'>
              <Link to='/StudentInformation' className='btn btn-outline-dark'>Plan de Estudios</Link>
            </li>
          </div>
        </ul>
      </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/StudentInformation'>
            <StudentInformation />
          </Route>
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
