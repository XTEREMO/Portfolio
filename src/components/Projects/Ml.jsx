import { useState } from "react";
import Model1 from '../../res/MlDemo/Model1.mp4'
const Ml = () => { 

  const [ proj,setProj ] = useState(0);
  return (
    <div className='project-box'>
            <div className='project-list'>
                <ul>
                    <li onMouseEnter={()=>setProj(1)}>
                        <a href='https://github.com/XTEREMO/Symptom-Analyzer-Predicting-Diseases-from-Symptom/blob/main/Buld%20Model.ipynb' target="_blank">Diseases from Symptoms</a>
                    </li>
                </ul>
            </div>
            <div className='projects'>
                <div className='vid-container'>
                    {   proj==0 ? <div style={{textAlign:'center'}}>Hover to see the Project<br/>Click to see the code</div>:
                        proj==1 ? <video className='vid' src={Model1} width={900} autoPlay muted loop/>:""
                    }
                </div>
            </div>
    </div>
  )
}

export default Ml