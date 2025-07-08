import React from 'react';
import locationLogo from '../assets/images/location.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Job = ( {job} ) => {
    const [ showFullDescription, setShowFullDescription] = useState(false);
    let description = job.description;
    let showMorL = () => setShowFullDescription((prevState) => (!prevState))

    if(!showFullDescription){
        description = description.substring(0, 100) + "...";
    }

    return (
        <div className="jobs">
            <div className="jobDetails">
                <p className="jobType">{ job.type }</p>
                <p className="jobWant">{ job.title }</p>
                <p className="details">{ description }</p>
                <button onClick={ showMorL } className='showMore'>{showFullDescription ? 'show less' : 'show more'}</button>
                <p className="jobPay">{ job.salary } /Year</p>
            </div>
            <hr className="hr" />
            <div className="locationHolder">
                <div className="locationDetails">
                    <img src={ locationLogo } alt="" className="locationLogo" />
                    <p className="location">{ job.location }</p>
                </div>
                <Link to={`/jobs/${job.id}`}className="readMore">Read More</Link>
            </div>
        </div>
    )
}

export default Job