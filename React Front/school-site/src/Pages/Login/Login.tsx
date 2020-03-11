import React, { Component } from 'react'
//import SchoolNavbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'
import { BrowserRouter as Router } from 'react-router-dom'
//import Main from '../Main/Main'



class Login extends Component {
  state = {}

  render() {
    return <Router>
      <div>
        <Card/>  
      </div>
    </Router>
  }
}

export default Login