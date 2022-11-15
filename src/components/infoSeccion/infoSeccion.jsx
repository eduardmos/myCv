import { useContext } from 'react'
import { Context } from '../../shared/contexts/Context'
import Aboutme from '../aboutme/Aboutme'
import Education from '../education/Education'
import Experience from '../experience/Experience'
import Habilities from '../habilities/Habilities'
import Language from '../language/Language'

const InfoSeccion = () => {
    const {show}= useContext(Context);
  return (
    <div className='cajatexto'>
    {show === 'aboutme' && <Aboutme/>}
    {show === 'education' && <Education/>}
    {show === 'experience' && <Experience/>}
    {show === 'language' && <Language/>}
    {show === 'habilities' && <Habilities/>}
    {show === 'x' && <> </>}
    </div>
    
  )
}
export default InfoSeccion