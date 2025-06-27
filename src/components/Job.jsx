import React from 'react';
import locationLogo from '../assets/images/location.png';

const Job = ( {job} ) => {
    return (
        <div className="jobs">
            <div className="jobDetails">
                <p className="jobType">{ job.type }</p>
                <p className="jobWant">{ job.title }</p>
                <p className="details">{ job.description }</p>
                <p className="jobPay">{ job.salary } /Year</p>
            </div>
            <hr className="hr" />
            <div className="locationHolder">
                <div className="locationDetails">
                    <img src={ locationLogo } alt="" className="locationLogo" />
                    <p className="location">{ job.location }</p>
                </div>
                <a href={`/job/${job.id}`} className="readMore">Read More</a>
            </div>
        </div>
    )
}

export default Job