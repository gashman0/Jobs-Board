import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
        <Link to='/jobs' className="footerBtn">View All Jobs</Link>
    </div>
  )
}

export default Footer