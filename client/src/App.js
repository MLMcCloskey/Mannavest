import React, { Component } from 'react';
import PrivateRoute from "./components/PrivateRoute";
import Header from './components/Header';
// import Navbar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
// import List from './components/List';
// import ListItem from './components/ListItem';
// import ActionButton from './components/CreateNew';
import Registry from './components/Registry';
import Loading from './components/Loading';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { useAuth0 } from "./react-auth0-wrapper";

const App = () => {

    // const { lists } = this.props;
    const { isAuthenticated, loginWithRedirect, logout, user, loading } = useAuth0();

    if (loading) {
    return (
      <Loading />
    );
  }
  // auth0|5d254d0aed54f30e5cff1161" client 1
  // auth0|5d254d0aed54f30e5cff1161"
  // auth0|5d254d0aed54f30e5cff1161
  // auth0|5d254d0aed54f30e5cff1161
  // 

    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path = '/' component = {Home} />
            <Route exact path = '/about' component = {AboutUs} />
            <PrivateRoute exact path = '/registry' render = {(props) => <Registry {...props} userID={user.sub}/>} />
          </Switch>
          {/* {this.state.page === 'About' ? <AboutUs /> : <Registry lists />} */}
          {/* { lists.map(list => 
            <List key={list.id} 
                  listID={list.id}
                  category={list.category} 
                  cards={list.cards}>
            </List>
          )}
          <ActionButton list /> */}
        </Router>
      </div>
    );
  
}

// const mapStateToProps = state => ({
//   lists: state.lists
// })

export default (App);
