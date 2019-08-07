import React, { Component } from 'react';
import { useAuth0 } from "../react-auth0-wrapper";
import API from '../utils/API';


// class Navbar extends React.Component {

// state = {
//   searchText: ""
// }

// componentDidMount() {
//   this.testAPI();
// }

// rewrote this section because it is within a class instead of a const i think
// useAuth0 = () => { isAuthenticated, loginWithRedirect, logout };

// testAPI = () => {
//   API.test().catch(err => console.log(err));
// }
// render() {

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, loading } = useAuth0();

  // if (loading || !user) {
  //   return (
  //     <div>
  //       <p> hold up </p>
  //     </div>
  //   );
  // }

  return (
    <div className='navigation'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Contribute</a>
            </li>
          </ul>
          {/* <li className="nav-item"> */}
          <a className="nav-link my-page" href="registry">My Page</a>
          {/* </li> */}
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2 searchBar" type="search" placeholder="Search for companies..." aria-label="Search" />
            <button className="btn btn-warning btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>

          {!isAuthenticated && (
            <button
              onClick={() =>
                loginWithRedirect({})
              }
            >
              Log in
            </button>
          )}

          {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

        </div>
      </nav>
    </div>
  )
}
// }

export default Navbar;