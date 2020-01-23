import React, { Component } from 'react'
import './watergraphic.css'

class WaterGraphic extends Component {

  state= {}

  render () {
    return <div>
      <canvas id='myChart' width='400' height='400'></canvas>
    </div>
  }
}

export default WaterGraphic