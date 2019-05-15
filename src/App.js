import React, { Component } from 'react';
import List from './components/List';
// import ListItem from './components/ListItem';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <header className="header">
          <h1> Hello World </h1>
        </header>
        { lists.map(list => 
        <List title={list.title} cards={list.cards}>
          
        </List>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
