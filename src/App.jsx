import './App.css'

//Components.....................
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Project from './components/Projects/Project'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Project/>}/>
      </Routes>
    </div>
  )
}

export default App
