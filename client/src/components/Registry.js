import React, { Component } from 'react';
import List from './List';
import ActionButton from './CreateNew';
import { connect } from 'react-redux';

class Registry extends Component {

  state = {
    section: "about"
  }
  
  render() {
    const { lists } = this.props;
    return (
      <div className='registry'>
        <div className='innerNav'>
          <h5 className='innerNavigation'>About Us</h5>
          <h5 className='innerNavigation'>What We Need</h5>
        </div>
        {lists.map(list =>
          <List key={list.id}
            listID={list.id}
            category={list.category}
            cards={list.cards}>
          </List>
        )}
        <ActionButton list />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(Registry);