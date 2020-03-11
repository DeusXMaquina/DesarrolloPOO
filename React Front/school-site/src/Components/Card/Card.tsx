import React, { Component } from 'react'
import './card.css'
import Main from '../../Pages/Main/Main'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

class Card extends Component {

  
  
  render () {

    const obtenerMatricula = () => {
      var matricula:any = document.getElementById('miMatricula') ? document.getElementById('miMatricula') : 'no hay valor'
      if (matricula.value === null){
        matricula.value = 'Valor incorrecto'
      }
      else
      console.log('Esto es matricula: ', matricula.value)
    }

    return <Router>
    <div className='card border-primary mb-3'>
      <div className='card-header'>Login Info</div>
      <div className='card-body text-primary'>
        <form>
          <div className='form-now'>
            <div className='col'>
              <input id='miMatricula' type='text' className='form-control' placeholder='Matricula'></input>
            </div>
          </div>
          <Link className='btn btn-outline-primary lg-btn' to='/main' type='button' onClick={obtenerMatricula}>Search</Link>
        </form>
      </div>
    </div>
    <Switch>
      <Route path='/main'>
        <Main/>
      </Route>
    </Switch>
    </Router>
  }
}

export default Card