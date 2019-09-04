import React, {useState, useEffect} from 'react';
import { useAuth0 } from "../react-auth0-wrapper";

const AboutUs = (props) => {
  // const { loading, user } = useAuth0();
  // let obj = JSON.parse(user);
  // console.log(user);
  // let [userInfo, setUserInfo] = useState(0);

  // useEffect( ()=> {
  //   function loadInfo() {
  //     console.log(userInfo);
  //     setUserInfo(user);
  //   }
  // });

  // if (loading || !user) {
  //   return (
  //     <div>
  //       <p> hold up </p>
  //     </div>
  //   );
  // }

  return (
    <div className='about'>
      {/* <h1>{props.company}</h1>
      <h2>About Us</h2>
      <p> {JSON.stringify(user, null, 2)}</p>
      <p>{getUserName}</p>
      <h1>{user.name}</h1> */}
      <p>Manavest is the newest app for investors and startups alike to gain capital and make business happen. Donate to a company you believe in or list your start up here to seek funding.</p>
      <p>We operate by taking 3% of all donations.</p>
    </div>
  )
}

export default AboutUs;