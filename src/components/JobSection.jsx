import React from 'react';
import { useState, useEffect } from 'react';
import Job from './Job';
import Spinner from './Spinner';


const JobSection = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async() => {
            const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs' ;
            try {
                const res =  await fetch( apiUrl );
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.log('Error due to parallex', error);
            }finally{
                setLoading(false);
            }
        }

        fetchJobs();
    }, []);

    return (
        <div className="jobsSection">
            <div className="jobHead">
                <p className="headTitle">{isHome ? 'Recent Jobs' : 'Browse Jobs'}</p>
            </div>
            <div className="jobBodies">
                {loading ? (<Spinner loading={loading} />) : (
                    <>
                        {jobs.map((job) => (
                        <Job key={job.id} job={ job }/>
                            ))
                        }  
                    </>
                )}
    
            </div>
        </div>
    )
}

export default JobSection