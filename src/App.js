import React, { Component } from 'react';
import Header from './components/Header';
// import Navbar from './components/NavBar';
import List from './components/List';
// import ListItem from './components/ListItem';
import ActionButton from './components/CreateNew';
import Registry from './components/Registry';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <Header />
        <Registry lists />
        {/* { lists.map(list => 
          <List key={list.id} 
                listID={list.id}
                category={list.category} 
                cards={list.cards}>
          </List>
        )}
        <ActionButton list /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
