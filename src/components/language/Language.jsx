import React from 'react'
import {CV} from '../../data/cv'
import '../language/Language.scss'

const Language = () => {
    const {language}= CV
  return (
    <div>
      {language.map((lan)=>{
        return <div className='language'>
            <p>idioma: <span>{lan.language}</span></p>
            <p>nivel: <span>{lan.level}</span></p>
        
        </div>
      })}
    </div>
  )
}

export default Language