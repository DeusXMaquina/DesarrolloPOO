import React, { Component } from 'react'
import Card from '../../Components/Card/Card'
import { BrowserRouter as Router } from 'react-router-dom'



class Search extends Component {
  state = {}

  render() {
    return <Router>
      <div>
        <Card/>  
      </div>
    </Router>
  }
}

export default Search