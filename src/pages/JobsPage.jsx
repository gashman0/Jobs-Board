import React, { useState } from 'react';
import JobSection from '../components/JobSection';
import Footer2 from '../components/Footer2';

const JobsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className='jobSection'>
      <div className="search">
        <input 
          type="search" 
          className="searchEng" 
          placeholder="Filter jobs..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="jobBodies">
        <JobSection searchQuery={searchQuery} />
      </div>

      <Footer2 />
    </div>
  )
}

export default JobsPage;
