import React from 'react'

const Form = () => {
  return (
    <div className="jobBodies">
        <form>
          <p className="addJob">Add Job</p>

          <label className="labelCap">Job Type</label><br />
          <select name="" id="">
              <option value="">Full-Time</option>
              <option value="">Part-Time</option>
              <option value="">Remote</option>
              <option value="">Internship</option>
          </select><br />

          <label for="" className="labelCap">Job Listing Name</label><br />
          <input type="text" placeholder="eg. Beautiful Apartment in Miami" /><br />

          <label for="" className="labelCap">Description</label><br />
          <textarea name="" id="" placeholder="Add any job duties, expectations, requirements, etc"></textarea><br />

          <label for="" className="labelCap">Salary</label><br />
          <select name="" id="">
              <option value="">Under $50k</option>
              <option value="">$50k - $60k</option>
              <option value="">$60k - $70k</option>
              <option value="">$70k - $80k</option>
              <option value="">$80k - $90k</option>
              <option value="">$90k - $100k</option>
              <option value="">Over $100k</option>
          </select><br />

          <label for="" className="labelCap">Location</label><br />
          <input type="text" placeholder="Company Location" /><br />

          <label for="" className="labelCap">Job Type</label><br />
          <input type="text" placeholder="Full-Time" /><br />

          <p>Company Info</p>

          <label for="" className="labelCap">Company Name</label><br />
          <input type="text" placeholder="Company Name" /><br />

          <label for="">Company Description</label><br />
          <textarea name="" id="" placeholder="What does your company do?"></textarea><br />

          <label for="" className="labelCap">Contact Email</label><br />
          <input type="text" placeholder="Email address for applicants" /><br />

          <label for="" className="labelCap">Contact Phone</label><br />
          <input type="text" placeholder="Optional phone for applicants" /><br />

          <button className="formBtn">Add Job</button>
        </form>

    </div>

  )
}

export default Form