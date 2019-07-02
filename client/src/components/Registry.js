import React, { Component } from 'react';
import List from './List';
import ActionButton from './CreateNew';
import { connect } from 'react-redux';
import API from '../utils/API';

class Registry extends Component {

  state = {
    section: "about",
    categories: []
  }
  
  componentDidMount() {
    this.getRegistry();
  }

  componentDidUpdate() {
    this.getRegistry();
  }

  getRegistry = () => {
    API.getRegistry()
      .then(res => {
        this.setState({
          categories: res.data
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    const { lists } = this.props;
    return (
      <div className='registry'>
        <div className='innerNav'>
          <h5 className='innerNavigation'>About Us</h5>
          <h5 className='innerNavigation'>What We Need</h5>
        </div>
        {this.state.categories.map(list =>
          <List key={list._id}
            listID={list._id}
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