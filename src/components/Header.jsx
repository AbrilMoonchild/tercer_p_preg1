import React from 'react'
import {BrowserRouter,Routes,Route,NavLink, Navigate} from 'react-router-dom'
import {Home} from './Home'
import {About} from './About'
import {Dashboard} from './Dashboard'
import '../styles.css/style.css'

function Header() {
  return (
      
      <BrowserRouter>
      <nav className='Nav'>
          
        <ul>
            <li>
                <NavLink to='/' className={({isActive}) => isActive ? 'nav-active' : ''}>
                     Home
                </NavLink>    
            </li>
            <li>
                <NavLink to='/about' className={({isActive}) => isActive ? 'nav-active' : ''}>
                     About
                </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard' className={({isActive}) => isActive ? 'nav-active' : ''}>
                    Dashboard
                </NavLink>
            </li>
            
        </ul>
      </nav>
        <Routes>
            
            <Route path='about' element={<About></About>}></Route>
            <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
            <Route path='home' element={<Home></Home>}></Route>
            <Route path='/*' element={<Navigate to='/home' replace></Navigate>}></Route>
        </Routes>
      </BrowserRouter>
    
  )
}

export {Header}