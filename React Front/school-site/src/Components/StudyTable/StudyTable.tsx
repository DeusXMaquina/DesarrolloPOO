import React, { Component } from 'react'
import './studytable.css'
import * as cargaAcademica from './carga.json'
import { IAlumno, IMaterias } from './StudyTableInterfaces'
import WaterGraphic from '../WaterGraphic/WaterGraphic'

console.log(cargaAcademica.Materias)

const capitalize = (word:string) => {
  return word.replace(word[0],word[0].toUpperCase())
}

const materiasporCarrera = Number(cargaAcademica.Alumno.totalMateriasCarrera)
class StudyTable extends Component <{}, {Alumno:IAlumno, Materias:IMaterias[]}> {

  componentWillMount() {
    fetch('https://localhost:44361/api/Alumn')
    .then (res => res.json())
    .then(data =>{
      this.setState({Alumno : data[0]})
    })
  }

  constructor (props:any) { 
    super(props)
    this.state = {
      Alumno: {
        nombre: '',
        apeidoPaterno: '',
        apeidoMaterno: '',
        edad: '',
        carrera: '',
        totalMateriasCarrera: ''
      },
      Materias: cargaAcademica.Materias
    }
  }

  render () {
    console.log('Esto es alumno: ', this.state.Alumno)

    const cargaMaterias = () => {
      return this.state.Materias.map( (materia,index) => {
        let color = {backgroundColor: materia.calificacion >= 80 ? 'green' : materia.calificacion >= 60 ? '#F3C702' : 'red'}
        return <li key={index} className='subject-row list-group-item d-flex justify-content between align-items-center'><span>{materia.nombre}</span>
      <div className='badge badge-primary badge-pill school-badge' style={color}>{materia.calificacion}</div>
      </li>
      })
    }

    const cargaInformacionAlumno = () => {
      return Object.keys(this.state.Alumno).map ((k:any, index:number) => {
        if(k === 'edad')
        return <div key={index}>{capitalize(k) +': ' +this.state.Alumno[k]}<br/></div>
      })
    }

    const cargaInformacionCarrera = () => {
      let promedio = 0
      let totalMaterias = 0
      this.state.Materias.map( materia => {
        promedio += materia.calificacion
        totalMaterias++
      })
      return <div>
        Promedio del Alumno: {(promedio/totalMaterias).toFixed()}<br/>
        Porcentaje de la Carrera: {((totalMaterias/materiasporCarrera)*100).toFixed()} %
      </div>
    }
    
    return <div>
      <div className='card border-primary mb-3'>
        <div className='card-header'>{this.state.Alumno.carrera} {cargaInformacionCarrera()}</div>
        <div className='card-body text-primary'>
          <h5 className='card-title'>{this.state.Alumno.nombre + ' ' + this.state.Alumno.apeidoPaterno}</h5>
          <div className='card-info'>{cargaInformacionAlumno()}</div>
          <div className= 'flex-table'>
            <ul className='table'>
            {cargaMaterias()}
            </ul>
            <div>
            <ul className='table'>
            {cargaMaterias()}
            </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='card border-primary mb-3'>
      </div>
    </div>
  }
}

export default StudyTable