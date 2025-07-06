import React from 'react'





const Hero = ({title="Become a Paid Employee", subTitle="Find the perfect job that fits your skills and needs"}) => {
  return (
    <div className="hero">
          <div className="heroContainer">
              <p className="firstHero">{ title }</p>
              <p className="secondHero">{ subTitle }</p>
          </div>
    </div>
  )
}

export default Hero