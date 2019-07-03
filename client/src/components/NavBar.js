import React, { Component } from 'react';
import API from '../utils/API';

class Navbar extends React.Component {

  state = {
    searchText: ""
  }
  
  // componentDidMount() {
  //   this.testAPI();
  // }

  testAPI = ()=> {
    API.test().catch(err => console.log(err));
  }

  render() {
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
                <a className="nav-link my-page"  href="registry">My Page</a>
              {/* </li> */}
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2 searchBar" type="search" placeholder="Search for companies..." aria-label="Search" />
                <button className="btn btn-warning btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;