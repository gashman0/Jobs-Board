import React from 'react';
import { useState } from 'react';
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';


const offcan = {color: "#3f51b5"};
const style = {backgroundColor: "black",color: "white"};
const nostyle = {backgroundColor: "",};
const activeLink = ({isActive}) => isActive ? style : nostyle ;
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('You Clicked the menu');
  };
  return (
    <>
      <div className="navbar">
        <div className="navholder">
          <div className="logoHolder">
            <img className="logo" src={ logo } />
            <p className="logoCaption">Jobs Boards</p>
          </div>
          <ul className="navLinks">
            <li><NavLink className="links" to='/' style={ activeLink }>Home</NavLink></li>
            <li><NavLink className="links" to='/jobs' style={ activeLink}>Jobs</NavLink></li>
            <li><NavLink className="links" to='/add-job' style={ activeLink }>Add Job</NavLink></li>
          </ul>

          <div className='menu'>
            {/* Mobile Menu Button */}
            <button className='menuBtn' onClick={toggleMenu} aria-label='Toggle menu'>{isMenuOpen ? '✕' : 'Menu'}</button>
            
          </div>
        </div>
      </div>


      {/* Mobile Off-Canvas Menu */}
      <div className={`offcanvas ${isMenuOpen ? 'open' : ''}`}>
        <div className="offcanvas-header">
          <img className="logo" src={logo} alt="Jobs Board Logo" />
          <p className="logoCaption" style={ offcan }>Jobs Board</p>
        </div>
        <ul className="mobile-navLinks">
          <li><NavLink className="links" to='/' style={activeLink} onClick={toggleMenu}>Home</NavLink></li>
          <li><NavLink className="links" to='/jobs' style={activeLink} onClick={toggleMenu}>Jobs</NavLink></li>
          <li><NavLink className="links" to='/add-job' style={activeLink} onClick={toggleMenu}>Add Job</NavLink></li>
        </ul>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu} />}
    
    </>

  );
};

export default Navbar