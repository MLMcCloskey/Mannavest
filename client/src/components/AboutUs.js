import React, {useState, useEffect} from 'react';
import { useAuth0 } from "../react-auth0-wrapper";

const AboutUs = (props) => {
  const { loading, user } = useAuth0();
  // let obj = JSON.parse(user);
  // console.log(user);
  // let [userInfo, setUserInfo] = useState(0);

  // useEffect( ()=> {
  //   function loadInfo() {
  //     console.log(userInfo);
  //     setUserInfo(user);
  //   }
  // });

  if (loading || !user) {
    return (
      <div>
        <p> hold up </p>
      </div>
    );
  }

  return (
    <div className='about'>
      <h1>{props.company}</h1>
      <h2>About Us</h2>
      <p> {JSON.stringify(user, null, 2)}</p>
      {/* <p>{getUserName}</p> */}
      <h1>{user.name}</h1>
      <p>My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?</p>
    </div>
  )
}

export default AboutUs;