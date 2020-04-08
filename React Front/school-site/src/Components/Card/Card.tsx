  import React, { Component } from 'react'
import './card.css'
import StudentInformation from '../StudyTable/StudyTable'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

class Card extends Component <{}, {matricula:number}>{

  state ={
    matricula: 1
  }
  
  render () {
    const obtenerMatricula = () => {
      var matricula:any = document.getElementById('miMatricula') ? document.getElementById('miMatricula') : 'no hay valor'
      if (matricula.value === null){
        matricula.value = 'Valor incorrecto'
      }
      else if (/[A-Z]|[a-z]/.test(matricula.value)){
        this.setState({matricula: 0})
      }
      else {
        this.setState({matricula: Number(matricula.value)})
      }
    }

    return <Router>
    <div className='card-component card border-primary mb-3'>
      <div className='card-body text-primary'>
        <form>
          <div className='form-now'>
            <div className='col'>
              <input id='miMatricula' type='text' className='form-control' placeholder='Matricula'></input>
            </div>
          </div>
          <Link className='btn btn-outline-primary lg-btn' type='button' onClick={obtenerMatricula} to='/StudentInformation/'>Search</Link>
        </form>
      </div>
    </div>
    <Switch>
      <Route path='/StudentInformation/'>
        <StudentInformation matricula ={this.state.matricula}  />
      </Route>
    </Switch>
    </Router>
  }
}

export default Card