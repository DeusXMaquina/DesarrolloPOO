import React, { Component } from 'react'
import './studytable.css'
//import * as cargaAcademica from './carga.json'
import { IStudent, ICourses } from './StudyTableInterfaces'

/*const capitalize = (word:string) => {
  return word.replace(word[0],word[0].toUpperCase())
} */
class StudyTable extends Component <{matricula:number}> {


  state: Readonly<{Student:IStudent, Courses:ICourses[]}> = {
    Student: {
      Name: '',
      LastName: '',
      SecondLastName: '',
      Age: '',
      Career: '',
      NumberOfCourses: ''
    },
    Courses: []
  }

  UNSAFE_componentWillMount() {
    if (this.props.matricula !== undefined){
      fetch(`https://localhost:44374/api/Student/${this.props.matricula}`)
      .then (res => res.json())
      .then(data =>{
        this.setState({Student : data[0]})
      })
      fetch(`https://localhost:44374/api/Courses/${this.props.matricula}`)
      .then(res => res.json())
      .then(data => {
        this.setState({Courses : data})
      })
    }
  }

  render () {
    console.log('Alumno: ', this.state.Student)
    console.log('Materias: ', this.state.Courses) 
    console.log('Matricula: ', this.props.matricula)

    const loadCourses = () => {
      return this.state.Courses.map( (Course,index) => {
        let color = {backgroundColor: Course.Grade >= 80 ? 'green' : Course.Grade >= 60 ? '#F3C702' : 'red'}
        return <li key={index} className='subject-row list-group-item d-flex justify-content between align-items-center'><span>{Course.Course}</span>
      <div className='badge badge-primary badge-pill school-badge' style={color}>{Course.Grade}</div>
      </li>
      })
    }

    const loadStudentInformation = () => {
      return Object.keys(this.state.Student).map ((k:any, index:number) => {
        if(k === 'Age' || k === 'Career')
        return k === 'Age' ? <div key={index}>{'Edad: ' +this.state.Student[k]}<br/></div> : <div key={index}>{'Carrera: ' +this.state.Student[k]}<br/></div>
        return true
      })
    }

    const loadCareerInformation = () => {
      let average:number = 0
      let totalCourses:number = 0
      this.state.Courses.map( course => {
        average += course.Grade
        totalCourses++
        return true
      })
      return <div>
        Promedio del Alumno: {(average/totalCourses).toFixed()}<br/>
        Porcentaje de la Carrera: {(totalCourses/Number(this.state.Student.NumberOfCourses)*100).toFixed()} %
      </div>
    }
    
    return <div>
      <div className='card border-primary mb-3'>
        <div className='card-header'>{this.state.Student.career} {loadCareerInformation()}</div>
        <div className='card-body text-primary'>
          <h5 className='card-title'>{this.state.Student.Name + ' ' + this.state.Student.LastName}</h5>
          <div className='card-info'>{loadStudentInformation()}</div>
          <div className= 'flex-table'>
            <ul className='table'>
            {loadCourses()}
            </ul>
          </div>
        </div>
    </div>
    </div>
  }
}

export default StudyTable