import React from 'react';
import Job from '../components/Job';
import jobs from '../jobs.json'

const JobsPage = () => {
  return (
    <>
      <div className='jobSection'>
      <div class="search">
          <input type="search" class="searchEng" placeholder="Filter jobs..." />
      </div>
      <div class="jobHead">
          <p class="headTitle">Browse Jobs</p>
      </div>
      <div className="jobBodies">
        {
          jobs.map((job) => (
            <Job key={job.id} job={ job }/>
          ))
        }
      </div>
      
    </div>

    <div class="footer">I'm just a footer</div>
    </>
    
  )
}

export default JobsPage