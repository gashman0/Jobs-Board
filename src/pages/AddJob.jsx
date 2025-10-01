import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer2 from '../components/Footer2';



const AddJob = ({addJobSubmit}) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Full-Time');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('Under $50k');
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');


  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    
    const newJob = {
      title,
      type,
      location,
      description,
      salary,
      companyName,
      companyDescription,
      companyEmail,
      companyPhone
    };

    addJobSubmit(newJob);
    toast.success('Your Job was added Successfully');
    return navigate('/jobs');
  }

  return (
    <>
      <div className="jobBodies">
        <form onSubmit={submitForm}>
          <p className="addJob">Add Job</p>

          <label className="labelCap">Job Type</label><br />
          <select name="type" id="type" value={type} onChange={(e) => setType(e.target.value)} required>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
          </select><br />

          <label htmlFor="" className="labelCap">Job Listing Name</label><br />
          <input type="text" name='title' id='title' placeholder="eg. Beautiful Apartment in Miami" value={title} onChange={(e) => setTitle(e.target.value)}/><br />

          <label htmlFor="" className="labelCap">Description</label><br />
          <textarea name="description" id="description" placeholder="Add any job duties, expectations, requirements, etc" value={description} onChange={(e) => setDescription(e.target.value)}></textarea><br />

          <label htmlFor="" className="labelCap">Salary</label><br />
          <select name="salary" id="salary" value={salary} onChange={(e) => setSalary(e.target.value)}>
              <option value="Under $50k">Under $50k</option>
              <option value="$50k - $60k">$50k - $60k</option>
              <option value="$60k - $70k">$60k - $70k</option>
              <option value="$70k - $80k">$70k - $80k</option>
              <option value="$80k - $90k">$80k - $90k</option>
              <option value="$90k - $100k">$90k - $100k</option>
              <option value="Over $100k">Over $100k</option>
          </select><br />

          <label htmlFor="" className="labelCap">Location</label><br />
          <input type="text" name='location' id='location' placeholder="Company Location" value={location} onChange={(e) => setLocation(e.target.value)}/><br />

          <label htmlFor="" className="labelCap">Job Type</label><br />
          <select name="type" id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
          </select><br />

          <p className='companyInfoo'>Company Info</p>

          <label htmlFor="" className="labelCap">Company Name</label><br />
          <input type="text" name='companyName' id='companyName' placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/><br />

          <label htmlFor="" className='labelCap'>Company Description</label><br />
          <textarea name="companyDescription" id="companyDescription" placeholder="What does your company do?"value={companyDescription} onChange={(e) => setCompanyDescription(e.target.value)}></textarea><br />

          <label htmlFor="companyEmail" className="labelCap">Contact Email</label><br />
          <input type="text" name='contactEmail' id='companyEmail' placeholder="Email address for applicants" value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)}/><br />

          <label htmlFor="companyPhone" className="labelCap">Contact Phone</label><br />
          <input type="text" name='contactPhone' id='companyPhone' placeholder="Optional phone for applicants" value={companyPhone} onChange={(e) => setCompanyPhone(e.target.value)}/><br />

          <button type="submit" className="formBtn">Add Job</button>
        </form>

      </div>
      <Footer2 />
    </>


  )
}

export default AddJob