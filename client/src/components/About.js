import React from 'react';
// import { useAuth0 } from "../react-auth0-wrapper";

const About = (props) => {
  
  return (
    <div className='about'>
      {/* <h2>About Us</h2> */}
      <p>{props.about}</p>
    </div>
  )
}

export default About;