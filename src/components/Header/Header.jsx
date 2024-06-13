import React from 'react'
import Logo from '../../assets/logo.svg'
import NavIcon from '../../assets/nav-menu-icon.svg'
import './Header.css'

function NavBar() {
  return (
    <div className='header'>
      <img className='logo' src={NavIcon} height={60}></img>
      <ul className='main-nav'>
        <li>ABOUT</li>
        <li>WORK</li>
        <li>CONTACT</li>
      </ul>
      <img className='nav-menu-icon' src={NavIcon} height={60}></img>
    </div>
  )
}

export default NavBar
