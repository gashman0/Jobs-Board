import React from 'react';
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';



const style = {backgroundColor: "black"};
const nostyle = {backgroundColor: ""};
const activeLink = ({isActive}) => isActive ? style : nostyle ;
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navholder">
          <div className="logoHolder">
            <img className="logo" src={ logo } />
            <p className="logoCaption">Jobs Board</p>
          </div>
          <ul className="navLinks">
            <li><NavLink className="links" to='/' style={ activeLink }>Home</NavLink></li>
            <li><NavLink className="links" to='/jobs' style={ activeLink}>Jobs</NavLink></li>
            <li><NavLink className="links" to='/add-job' style={ activeLink }>Add Job</NavLink></li>
          </ul>
          <div className='menu'>
            <button className='menuBtn'>Menu</button>
          </div>
        </div>
      </div>
  )
}

export default Navbar