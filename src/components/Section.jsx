import React from 'react';
import { Link } from 'react-router-dom';




const Section = () => {
  return (
    <section>
        <div className="forOption">
          <div>
            <div className="employers">
                <p className="devEmp">For Developers</p>
                <p className="devCaption">Browse our jobs/skills and start your career today for a better tomorrow.</p>
                <Link className='browse' to='/jobs'>Browse Jobs</Link>
            </div>
            <div className="employers last">
                <p className="devEmp">For Employers</p>
                <p className="devCaption">List your job to find the perfect developer/employee for the role.</p>
                <Link className='add' to='/add-job'>Add Job</Link>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Section