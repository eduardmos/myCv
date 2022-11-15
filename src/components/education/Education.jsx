import React from 'react'
import {CV} from '../../data/cv'
import '../education/education.scss'
const Education = () => {
    const {education}= CV
  return (
    <div>
      {education.map((edu)=>{
        return <div className='education'>
         
            <p>nombre:<span>{edu.name}</span></p>
            <p>fecha:<span>{edu.date}</span></p>
            <p>lugar:<span>{edu.where}</span></p>
          
        </div>
      })}
    </div>
  )
}

export default Education
