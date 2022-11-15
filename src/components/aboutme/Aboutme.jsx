import React from 'react'
import {CV} from '../../data/cv.js'
import '../aboutme/Aboutme.scss'

const Aboutme = () => {
  const {hero,aboutMe} = CV
  // console.log(hero,aboutMe);
  return (  
  <div>
  <div className="contenedor">
            <p>nombre:<span>{hero.fullName}</span></p>
            <p>ciudad:<span>{hero.city}</span></p>
            <p>email:<span>{hero.email}</span></p>
            <p>Edad:<span>{hero.Years}</span></p>
   {/* <div>
            <p>nombre:{hero.aboutMe[0]}</p>
            <p>ciudad:{aboutMe.segundo}</p>
            <p>email:{aboutMe.tercero}</p>
            <p>Edad:{about.cuartoMe}</p>
   </div> */}
  </div>
</div>
);
};
  
  

export default Aboutme
