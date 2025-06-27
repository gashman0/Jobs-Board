import React from 'react'
import logo from '../assets/images/logo.png'



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
            <li><a className="links" href="" style={ style }>Home</a></li>
            <li><a className="links" href="jobs.html">Jobs</a></li>
            <li><a className="links" href="addjobs.html">Add Job</a></li>
          </ul>
        </div>
      </div>
  )
}

export default Navbar