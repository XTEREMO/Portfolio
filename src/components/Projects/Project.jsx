import './Project.css'
import Mern from './MERN'
import Ml from './Ml'
import { useState } from 'react'

const Project = () => {
  const [ page, setPage ] = useState(1);
  return (
    <div>
        <div className="type-list">
            <h4 onClick={()=>setPage(1)} className={page==1 ? "page-on":"page-not"}>MERN</h4>
            <h4 onClick={()=>setPage(2)} className={page==2 ? "page-on":"page-not"}>Machine Lerning</h4>
        </div>
        {
            page==1 ? <Mern/>:
            page==2 ? <Ml/>:""
        }
        
    </div>
  )
}

export default Project