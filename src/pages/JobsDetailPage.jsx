import React from 'react';
import { useParams, useLoaderData, Link } from 'react-router-dom';
import location from '../assets/images/location.png';




const JobsDetailPage = () => {
    const { id } = useParams();
    const job = useLoaderData();

    const black ={backgroundColor: 'blue'};
    const red = {backgroundColor: 'red'};
  return (
    <>  
        <div className="jobBodiess">
            
            <div className="div1">

                <div className="needed">
                    <p className="jobTypee">{job.type}</p>
                    <p className="workerNeeded">{job.title}</p>
                    <div className="locationDetails">
                        <img src={ location } alt="" className="locationLogo" />
                        <p className="workLocation">{job.location}</p>
                    </div>
                </div>

                <div className="descriptionBox">
                    <p className="jobDescription">Job Description</p>
                    <p className="descriptionDetails">{job.description}</p>
                    <p className="salary">Salary</p>
                    <p className="salaryAmount">{job.salary}/ Year</p>
                </div>
                <button className="apply">Apply</button>

            </div>


            <div className="div2">

                <div className="aboutCompany">
                    <p className="companyInfo">Company Info</p>
                    <p className="companyName">{job.company.name}</p>
                    <p className="companyDetails">{job.company.description}</p>
                    <hr className="line" />
                    <p className="contact">Contact Email:</p>
                    <a href="mailto:" className="contactLine">{job.company.contactEmail}</a>
                    <p className="contact">Contact Phone:</p>
                    <a href="tel:+" className="contactLine">{job.company.contactPhone}</a>
                </div>


                <div className="manage">
                    <p className="manageJob">Manage Job</p>
                    <Link to={`/jobs/edit/${job.id}`} className="eButton" style={ black }>Edit Job</Link>
                    <Link to={`/jobs/delete/${job.id}`} className="eButton" style={ red }>Delete Job</Link>
                </div>
            </div>
               
        </div>


        <div className="footerr">
            I'm just a footer
        </div>
    </>
    
  )
};


const jobLoader = async({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}



export { JobsDetailPage as default, jobLoader };