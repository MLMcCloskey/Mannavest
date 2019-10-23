import React, { Component, useState } from 'react';
import List from './List';
import ActionButton from './CreateNew';
import { connect } from 'react-redux';
import API from '../utils/API';
import { useAuth0 } from "../react-auth0-wrapper";

class Registry extends Component {

  state = {
    section: "about",
    userID: "",
    companyField: "",
    aboutField: "",
    categories: [{category: "Services", cards: [], comapanyName: "this.state.comapanyField", aboutUs: "this.state.aboutField", userID: this.props.userID, path: this.props.match.path }, {category: "Supplies", cards: [], comapanyName: "this.state.comapanyField", aboutUs: "this.state.aboutField", userID: this.props.userID, path: this.props.match.path }, {category: "Other", cards: [], comapanyName: "this.state.comapanyField", aboutUs: "this.state.aboutField", userID: this.props.userID, path: this.props.match.path }]
  }

  componentDidMount() {
    console.log(this.props);
    this.setState({ userID: this.props.userID });
    this.getRegistry(this.props.userID);
  }

  componentWillReceiveProps() {
    this.getRegistry(this.props.userID);
  }

  handleFormInput = (e) => {
    let field = e.target.id;
    console.log(field);
    this.setState({ [field]: e.target.value })
    this.setState({ userID: this.props.userID });
  }

  getRegistry = (id) => {
    console.log(id);
    API.getRegistry(id)
      .then(res => {
        console.log(res.data);
        this.setState({
          categories: res.data,
          companyField: res.data[0].companyName,
          aboutField: res.data[0].aboutUs
        })
      })
      .catch(err => console.log(err));
  }

  createCompany = (id) => {
    console.log(id);
    API.createCompany(id)
      .then(res => {
        console.log(res.data);
        this.setState({ comapanyField: res.data.companyName })
      })
  }

  // create 3 card routes... one each category

  render() {
    return (
      <div className='registry'>

        <h3> Build your own page to show your project to the world! </h3>

        {!this.state.companyField ? <div className="tehCOmpany"><input type='text' className='companyTitle' placeholder="What is the name of your company?" /> <button>Save</button> </div> : <h3>show the page</h3>}

        <h4>Name: {this.state.companyField ? this.state.companyField : "Name"}</h4>
        <input type="text" className="infoField" id="companyField" placeholder={this.state.companyField ? this.state.companyField : "The name of your company or project..."} onChange={this.handleFormInput} />

        <h4>About Us</h4>
        <textarea type="text" className="infoField" id="aboutField" placeholder={this.state.aboutField ? this.state.aboutField : "Tell the world about your company or project..."} onChange={this.handleFormInput} />

        <h4>Your Registry</h4>
        <h5>Create a list of things you will need</h5>

        {/* create 3 lists for each category and call each GET separately */}

        {this.state.categories.map(list =>
          <List key={list._id}
            listID={list._id}
            category={list.category}
            cards={list.cards}
            companyName={this.state.companyField}
            aboutUs={this.state.aboutField}
            userID={this.props.userID}
            path={this.props.match.path}
          />
        )}
        <ActionButton 
          companyName={this.state.companyField}
          aboutUs={this.state.aboutField}
          userID={this.props.userID}
          list
        />
      </div>
    )
  }
}


export default Registry2;