import React from 'react'



const style = {backgroundColor: "black"};
const App = () => {
  const name = "Gashman";
  return (
    <>
      <div className="navbar">
        <div className="navholder">
          <div className="logoHolder">
            <img className="logo" src="/images/logo.png" alt="" />
            <p className="logoCaption">React Jobs</p>
          </div>
          <ul className="navLinks">
            <li><a className="links" href="" style={ style }>Home</a></li>
            <li><a className="links" href="jobs.html">Jobs</a></li>
            <li><a className="links" href="addjobs.html">Add Job</a></li>
          </ul>
        </div>
      </div>

      <div className="hero">
          <div className="heroContainer">
              <p className="firstHero">Become a React Dev</p>
              <p className="secondHero">Find the React job that fits your skills and needs</p>
          </div>
      </div>

      <section>
        <div className="forOption">
          <div className="employers">
              <p className="devEmp">For Developers</p>
              <p className="devCaption">Browse our React jobs and start your career today</p>
              <button className="browse">Browse Jobs</button>
          </div>
            <div className="employers">
                <p className="devEmp">For employers</p>
                <p className="devCaption">List your job to find the perfect developer for the role</p>
                <button className="add">Add Job</button>
            </div>
        </div>
      </section>

        <div className="jobsSection">
            <div className="jobHead">
                <p className="headTitle">Browse Jobs</p>
            </div>
            <div className="jobBodies">

                <div className="jobs">
                    <div className="jobDetails">
                        <p className="jobType">Full-Time</p>
                        <p className="jobWant">Senior React Developer</p>
                        <p className="details">We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript...</p>
                        <p className="jobPay">$70 - $80K / Year</p>
                    </div>
                    <hr className="hr" />
                    <div className="locationHolder">
                        <div className="locationDetails">
                            <img src="/images/location.png" alt="" className="locationLogo" />
                            <p className="location">Boston, MA</p>
                        </div>
                        <button className="readMore">Read More</button>
                    </div>
                </div>

               <div className="jobs">
                    <div className="jobDetails">
                        <p className="jobType">Remote</p>
                        <p className="jobWant">Front-End Engineer (React)</p>
                        <p className="details">Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion...</p>
                        <p className="jobPay">$70 - $80K / Year</p>
                    </div>
                    <hr className="hr" />
                    <div className="locationHolder">
                        <div className="locationDetails">
                            <img src="/images/location.png" alt="" className="locationLogo" />
                            <p className="location">Miami, FL</p>
                        </div>
                        <button className="readMore">Read More</button>
                    </div>
                </div>
                
                <div className="jobs">
                    <div className="jobDetails">
                        <p className="jobType">Remote</p>
                        <p className="jobWant">React.js Developer</p>
                        <p className="details">Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference...</p>
                        <p className="jobPay">$70 - $80K / Year</p>
                    </div>
                    <hr className="hr" />
                    <div className="locationHolder">
                        <div className="locationDetails">
                            <img src="/images/location.png" alt="" className="locationLogo" />
                            <p className="location">Brooklyn, NY</p>
                        </div>
                        <button className="readMore">Read More</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer">
            <button className="footerBtn">View All Jobs</button>
        </div>
    </>
  )
}

export default App