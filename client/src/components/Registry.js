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
    categories: []
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

  render() {
    // const { loading, user } = useAuth0();
    const { lists } = this.props;
    return (
      <div className='registry'>
        {/* <div className='innerNav'>
          <h5 className='innerNavigation'>About Us</h5>
          <h5 className='innerNavigation'>What We Need</h5>
        </div> */}

        <h3> Build your own page to show your project to the world! </h3>

        <h4>Name: {this.state.companyField ? this.state.companyField : "Name"}</h4>
        <input type="text" className="infoField" id="companyField" placeholder={this.state.companyField ? this.state.companyField : "The name of your company or project..."} onChange={this.handleFormInput} />

        <h4>About Us</h4>
        <textarea type="text" className="infoField" id="aboutField" placeholder={this.state.aboutField ? this.state.aboutField : "Tell the world about your company or project..."} onChange={this.handleFormInput} />

        <h4>Your Registry</h4>
        <h5>Create a list of things you will need</h5>
        {this.state.categories.map(list =>
          <List key={list._id}
            listID={list._id}
            category={list.category}
            cards={list.cards}
            companyName={this.state.companyField}
            aboutUs={this.state.aboutField}
            userID={this.state.userID}
            path={this.props.match.path}
          />
        )}
        <ActionButton 
          companyName={this.state.companyField}
          aboutUs={this.state.aboutField}
          userID={this.state.userID}
          list
        />
      </div>
    )
  }
}


// --------------------- Rebuilt with Hooks --------------------  //

// const Registry = (props) => {
//   const { loading, user } = useAuth0();
//   const [categories, setCategories] = useState(0);

//   useEffect( ()=> {
//     // load the api
//   });

//   return (
//     <div className='registry'>
//         <div className='innerNav'>
//           <h5 className='innerNavigation'>About Us</h5>
//           <h5 className='innerNavigation'>What We Need</h5>
//         </div>
//         {/* <h1> {user.name} </h1> */}
//         {this.state.categories.map(list =>
//           <List key={list._id}
//             listID={list._id}
//             category={list.category}
//             cards={list.cards}>
//           </List>
//         )}
//         <ActionButton list />
//       </div>
//   );
// }

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(Registry);