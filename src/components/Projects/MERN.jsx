import './Project.css'
import { useState } from 'react';


import TravoNest from '../../res/ProjectDemo/TravoNest.mp4'
import WordAnalysis from '../../res/ProjectDemo/WordAnalysis.mp4'



const Mern = () => {
  const [ proj,setProj ] = useState(0);
  return (
    <div className='project-box'>
            <div className='project-list'>
                <ul>
                    <li onMouseEnter={()=>setProj(1)}>
                        <a href='https://github.com/XTEREMO/TravoNest' target="_blank">TravoNest</a>
                    </li>
                    <li onMouseEnter={()=>setProj(2)}>
                        <a href='https://github.com/XTEREMO/Word-Analytics-Using-Practice-Html-CSS-Js' target="_blank">Word Analytics</a>
                    </li>
                </ul>
            </div>
            <div className='projects'>
                <div className='vid-container'>
                    {   proj==0 ? <div style={{textAlign:'center'}}>Hover to see the Project<br/>Click to see the code</div>:
                        proj==1 ? <video className='vid' src={TravoNest} width={950} autoPlay muted loop/>:
                        proj==2 ? <video className='vid' src={WordAnalysis} width={950} autoPlay muted loop/>:""
                    }
                </div>
            </div>
    </div>
  )
}

export default Mern