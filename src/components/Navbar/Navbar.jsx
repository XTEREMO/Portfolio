//Css...................
import './Navbar.css'

//Dependencies..............
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'




import {
    HiHome,
    HiRectangleGroup,
    HiEnvelope
} from 'react-icons/hi2'




const Navbar = () => {
  const location = useLocation().pathname;
  return (
    <nav className='nav'>
        <ul>
            <li>
                <h5 className='menu-name'>Home</h5>
                <NavLink to='/'>
                    <HiHome className='nav-icon' color={ location=='/'? 'red' : 'aqua'}/>
                </NavLink>
            </li>
            <li>
                <h5 className='menu-name'>Projects</h5>
                <NavLink to='/projects'>
                    <HiRectangleGroup className='nav-icon' color={ location=='/projects'? 'red' : 'aqua'}/>
                </NavLink>
            </li>
            <li>
                <h5 className='menu-name'>Contact</h5>
                <NavLink to='/contact'>
                    <HiEnvelope className='nav-icon' color={ location=='/contact'? 'red' : 'aqua'}/>
                </NavLink>
            </li>
        </ul>
    </nav>
    
  )
}

export default Navbar