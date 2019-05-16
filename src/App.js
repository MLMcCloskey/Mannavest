import React, { Component } from 'react';
import List from './components/List';
// import ListItem from './components/ListItem';
import ActionButton from './components/CreateNew';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <header className="header">
          <h1> MANNAVEST </h1>
        </header>
        { lists.map(list => 
          <List key={list.id} 
                listID={list.id}
                category={list.category} 
                cards={list.cards}>
          </List>
        )}
        <ActionButton list />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
