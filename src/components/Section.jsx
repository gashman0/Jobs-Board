import React from 'react';




const Section = () => {
  return (
    <section>
        <div className="forOption">
            <div className="employers">
                <p className="devEmp">For Developers</p>
                <p className="devCaption">Browse our React jobs and start your career today</p>
                <button className="browse">Browse Jobs</button>
            </div>
            <div className="employers">
                <p className="devEmp">For Employers</p>
                <p className="devCaption">List your job to find the perfect developer for the role</p>
                <button className="add">Add Job</button>
            </div>
        </div>
    </section>
  )
}

export default Section