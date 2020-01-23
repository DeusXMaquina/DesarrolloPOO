import React, { Component } from 'react'
import './card.css'

class Card extends Component {
  
  render () {
    return <div className='card border-primary mb-3'>
      <div className='card-header'>Login Info</div>
      <div className='card-body text-primary'>
        <form>
          <div className='form-now'>
            <div className='col'>
              <input type='text' className='form-control' placeholder='Matricula'></input>
            </div>
          </div>
        </form>
        <button className='btn btn-outline-primary lg-btn' type='button'>Search</button>
      </div>
    </div>
  }
}

export default Card