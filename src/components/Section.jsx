import React from 'react';
import { Link } from 'react-router-dom';




const Section = () => {
  return (
    <section>
        <div className="forOption">
            <div className="employers">
                <p className="devEmp">For Developers</p>
                <p className="devCaption">Browse our React jobs and start your career today</p>
                <Link className='browse' to='/jobs'>Browse Jobs</Link>
            </div>
            <div className="employers">
                <p className="devEmp">For Employers</p>
                <p className="devCaption">List your job to find the perfect developer for the role</p>
                <Link className='add' to='/add-job'>Add Job</Link>
            </div>
        </div>
    </section>
  )
}

export default Section