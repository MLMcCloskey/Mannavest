import React, { Component } from 'react';
import Header from './components/Header';
// import Navbar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
// import List from './components/List';
// import ListItem from './components/ListItem';
// import ActionButton from './components/CreateNew';
import Registry from './components/Registry';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

class App extends Component {
  state = {
    page: 'About'
  }

  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path = '/' component = {Home} />
            <Route exact path = '/about' component = {AboutUs} />
            <Route exact path = '/registry' component = {Registry} />
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
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
