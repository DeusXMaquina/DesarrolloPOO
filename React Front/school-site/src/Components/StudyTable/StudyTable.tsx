import React, { Component } from 'react'
import './studytable.css'
import { IStudent, ICourses } from './StudyTableInterfaces'

class StudyTable extends Component <{matricula:number}> {


  state: Readonly<{isValid:boolean, Student:IStudent, Courses:ICourses[]}> = {
    isValid: false,
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
    fetch(`https://localhost:44374/api/Validation/${this.props.matricula}`)
    .then (res => res.json())
    .then (data =>{
      this.setState({isValid: data})
    })
    if (this.props.matricula !== undefined){
      fetch(`https://localhost:44374/api/Student/${this.props.matricula}`)
      .then (res => res.json())
      .then(data =>{
        this.setState({Student: data})
      })
      fetch(`https://localhost:44374/api/Courses/${this.props.matricula}`)
      .then(res => res.json())
      .then(data => {
        this.setState({Courses: data})
      })
    }
  }

  render () {

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
        Porcentaje de la Carrera: {(totalCourses/Number(this.state.Student.NumberOfCourses)*100).toFixed()} % <br />
        Tiempo estimado para terminar: {((Number(this.state.Student.NumberOfCourses) - totalCourses)/7).toFixed() } Periodos
      </div>
    }

    const loadTable = () => {
      return (
        <div>
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
      )
    }

    const noInformation = () => {
      return (
        <div className='card-component card border-primary mb-3'>
          <div className='card-body text-primary'>
            <h3>Matricula Invalida</h3>
              <div className='form-now'>
                <div className='col'>
                </div>
              </div>
              <a href='/' className='btn back-button btn-outline-primary lg-btn' >Volver a Intentar</a>
          </div>
        </div>)
    }
    
    return this.state.isValid ? loadTable() : noInformation()
  }
}

export default StudyTable