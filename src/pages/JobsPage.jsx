import React, { useState } from 'react';
import JobSection from '../components/JobSection';

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

      <div className="footer">I'm just a footer</div>
    </div>
  )
}

export default JobsPage;
