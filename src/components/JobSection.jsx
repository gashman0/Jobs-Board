import React, { useState, useEffect } from 'react';
import Job from './Job';
import Spinner from './Spinner';
import NoJobsFound from './NoJobsFound';

// Add this reconstruction function (same as in App.jsx)
const reconstructJob = (job) => {
  return {
    ...job,
    company: {
      name: job.companyName || '',
      description: job.companyDescription || '',
      email: job.companyEmail || job.contactEmail || '',
      phone: job.companyPhone || job.contactPhone || ''
    }
  };
};

const JobSection = ({ isHome = false, searchQuery = "" }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Use your MockAPI URL (same as in App.jsx)
  const MOCKAPI_URL = "https://686bc6ba14219674dcc60efc.mockapi.io/jobs";

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome 
        ? `${MOCKAPI_URL}?page=1&limit=3`  // MockAPI pagination format
        : MOCKAPI_URL;
      
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error('Failed to fetch');
        
        const data = await res.json();
        setJobs(data.map(job => reconstructJob(job)));
        
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isHome]);

  // Filter jobs based on search query
  const filteredJobs = jobs.filter((job) => {
    const query = searchQuery.toLowerCase();
    return (
      job.title.toLowerCase().includes(query) ||
      job.description.toLowerCase().includes(query) ||
      job.type.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query)
    );
  });

  return (
    <div className="jobsSection">
      <div className="jobHead">
        <p className="headTitle">{isHome ? 'Recent Jobs' : 'Browse Jobs'}</p>
      </div>
      <div className="jobBodies">
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <>
            {filteredJobs.length > 0 ? (
              [...filteredJobs]   // make a copy
                .reverse()        // reverse order
                .map((job) => <Job key={job.id} job={job} />)
            ) : (
              <NoJobsFound />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default JobSection;
