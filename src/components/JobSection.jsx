import React from 'react';
import jobs from '../jobs.json';
import Job from './Job';



const JobSection = () => {
    const recentJobs = jobs.slice(0, 3);

    return (
        <div className="jobsSection">
            <div className="jobHead">
                <p className="headTitle">Browse Jobs</p>
            </div>
            <div className="jobBodies">

                {
                    recentJobs.map((job) => (
                        <Job key={job.id} job={ job }/>
                    ))
                }

    
            </div>
        </div>
    )
}

export default JobSection