import React from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';



const style = {backgroundColor: "black"};
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navholder">
          <div className="logoHolder">
            <img className="logo" src={ logo } />
            <p className="logoCaption">React Jobs</p>
          </div>
          <ul className="navLinks">
            <li><Link className="links" to='/' style={ style }>Home</Link></li>
            <li><Link className="links" to='/jobs'>Jobs</Link></li>
            <li><Link className="links" to='/add-job'>Add Job</Link></li>
          </ul>
        </div>
      </div>
  )
}

export default Navbar