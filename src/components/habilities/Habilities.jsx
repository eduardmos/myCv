import React from 'react'
import {CV} from '../../data/cv'
import '../habilities/Habilities.scss'

const Habilities = () => {
    const {habilities}= CV
  return (
    <div>
      {habilities.map((habili)=>{
        return <div className='habilities'>
            <p>{habili}</p>
            </div>
      })}
    </div>
  )
}

export default Habilities