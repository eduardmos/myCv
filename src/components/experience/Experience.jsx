import React from 'react'
import {CV} from '../../data/cv'
import '../experience/experience.scss'

const Experience = () => {
    const {experience}= CV
  return (
    <div>
      {experience.map((exp)=>{
        return <div className='experience'>
            <p>nombre:<span>{exp.name}</span></p>
            <p>fecha:<span>{exp.date}</span></p>
            <p>lugar:<span>{exp.where}</span></p>
            <p>descripción:<span>{exp.description}</span></p>
        </div>
      })}
    </div>
  )
}

export default Experience
