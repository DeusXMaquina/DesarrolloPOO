import React, { Component } from 'react'
import SchoolNavbar from '../../Components/Navbar/Navbar'
import StudyTable from '../../Components/StudyTable/StudyTable'



class Login extends Component {
  state = {}

  render() {
    return <div>
        <SchoolNavbar/>
        <StudyTable/>
        
      </div>
  }
}

export default Login