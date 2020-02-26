import React, { Component } from 'react'
import './navbar.css'
import { Link, BrowserRouter as Router } from 'react-router-dom'

class SchoolNavbar extends Component {
  state = {}

  render () {
      return (
      <Router>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='login'>Nombre Escuela</a>
        <ul className='navbar-nav mr-auto'>
          <div className='nav-buttons'>
            <li className='nav-item active'>
              <Link to='/login' type='button' className='btn btn-outline-dark'>Inicio</Link>
            </li>
          </div>
          <div className='nav-buttons'>
            <li className='nav-item'>
              <Link to='/main' type='button' className='btn btn-outline-dark'>Plan de Estudios</Link>
            </li>
          </div>
        </ul>
      </nav>
      </Router>)
  }
}

export default SchoolNavbar