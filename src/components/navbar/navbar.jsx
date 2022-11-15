import React, {useContext} from 'react'
import { Context } from '../../shared/contexts/Context'
import './navbar.scss'

const Navbar = () => {
  const {setShow}= useContext(Context);
  return (
   
    <nav className='navbar'>
     <button onClick={()=>setShow('aboutme')}> AboutMe </button>
     <button onClick={()=>setShow('education')}> Education </button>
     <button onClick={()=>setShow('experience')}> Experience</button>
     <button onClick={()=>setShow('language')}> Language </button>
     <button onClick={()=>setShow('habilities')}> Habilities </button>
     <button onClick={()=>setShow(null)}> x </button>
    </nav>
   
  )
}

export default Navbar

