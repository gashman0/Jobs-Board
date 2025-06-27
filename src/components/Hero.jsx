import React from 'react'





const Hero = ({title="Become a React Dev", subTitle="Find the React job that fits your skills and needs"}) => {
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