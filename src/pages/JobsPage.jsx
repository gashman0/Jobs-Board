import React from 'react';
import JobSection from '../components/JobSection';

const JobsPage = () => {
  return (
    <>
      <div className='jobSection'>
        <div className="search">
          <input type="search" className="searchEng" placeholder="Filter jobs..." />
        </div>
      <div className="jobBodies">
        <JobSection />
      </div>
      
    </div>

    <div className="footer">I'm just a footer</div>
    </>
    
  )
}

export default JobsPage