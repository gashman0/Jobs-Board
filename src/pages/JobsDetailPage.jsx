import React from 'react';
import { useParams, useLoaderData, Link, useNavigate } from 'react-router-dom';
import location from '../assets/images/location.png';
import { toast } from 'react-toastify';
import Footer2 from '../components/Footer2';



const JobsDetailPage = ({deleteJob}) => {

    const navigate = useNavigate();
    const { id } = useParams();
    const job = useLoaderData();


    const onDeleteClick = (jobId) => {
        const confirm = window.confirm('Are you sure you want to delete this job ?');
        if(!confirm) return;
        deleteJob(jobId);
        toast.success('Job Deleted Successfully');
        navigate("/jobs");
    }



    const handleApply = () => {
        
        if (window.confirm('Are you sure you want to apply for this position?')) {
            // 1. Show success toast
            toast.success(`Application submitted to ${job.company.name} successfully!`, {
            position: "top-right",
            autoClose: 3000,
            });
            
            // 2. Redirect to homepage after a slight delay
            setTimeout(() => {
            navigate('/');
            }, 2000); // 1 second delay to let user see the toast
        }
        
        
    };

    const black ={backgroundColor: 'blue'};
    const red = {backgroundColor: 'red'};
  return (
    <>  
        <div className="jobBodies">
            
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
                <button className="apply" onClick={handleApply}>Apply</button>

            </div>


            <div className="div2">

                <div className="aboutCompany">
                    <p className="companyInfo">Company Info</p>
                    <p className="companyName">{job.companyName}</p>
                    <p className="companyDetails">{job.companyDescription}</p>
                    <hr className="line" />
                    <p className="contact">Contact Email:</p>
                    <a href="mailto:" className="contactLine">{job.companyEmail}</a>
                    <p className="contact">Contact Phone:</p>
                    <a href="tel:+" className="contactLine">{job.companyPhone}</a>
                </div>


                <div className="manage">
                    <p className="manageJob">Manage Job</p>
                    <Link to={`/edit-job/${job.id}`} className="eButton" style={ black }>Edit Job</Link>
                    <button onClick={() => onDeleteClick(job.id)} className="eButton" style={ red }>Delete Job</button>
                </div>
            </div>
               
        </div>


        <Footer2 />
    </>
    
  )
};


const jobLoader = async({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}



export { JobsDetailPage as default, jobLoader };