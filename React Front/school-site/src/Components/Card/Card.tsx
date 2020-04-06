import React, { Component } from 'react'
import './card.css'
import Main from '../../Pages/Main/Main'
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom'

class Card extends Component {

  
  
  render () {

    const obtenerMatricula = () => {
      var matricula:any = document.getElementById('miMatricula') ? document.getElementById('miMatricula') : 'no hay valor'
      if (matricula.value === null){
        matricula.value = 'Valor incorrecto'
      }
      else if (typeof matricula.value === 'number')
      return matricula.value
      else return null
    }
    let matricula:number = 1

    return <Router>
    <div className='card-component card border-primary mb-3'>
      <div className='card-header'>Login Info</div>
      <div className='card-body text-primary'>
        <form>
          <div className='form-now'>
            <div className='col'>
              <input id='miMatricula' type='text' className='form-control' placeholder='Matricula'></input>
            </div>
          </div>
          <NavLink className='btn btn-outline-primary lg-btn' to='/StudentInformation' type='button' onClick={matricula= obtenerMatricula()}>Search</NavLink>
        </form>
      </div>
    </div>
    <Switch>
      <Route path='/StudentInformation'>
        <Main matricula={matricula}/>
      </Route>
    </Switch>
    </Router>
  }
}

export default Card