import React, { Component } from 'react'
import './navbar.css'

class SchoolNavbar extends Component {
  state = {}

  render () {
      return (<nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='www.hpe.com'>Nombre Escuela</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className='navbar-nav mr-auto'>
          <div className='nav-buttons'>
            <li className='nav-item active'>
              <button type='button' className='btn btn-outline-dark'>Inicio</button>
            </li>
          </div>
          <div className='nav-buttons'>
            <li className='nav-item'>
              <button type='button' className='btn btn-outline-dark'>Plan de Estudios</button>
            </li>
          </div>
        </ul>
      </nav>)
  }
}

export default SchoolNavbar