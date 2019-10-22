import React, { Component, useState } from 'react';
import List from './List';
import Loading from './Loading';
import ActionButton from './CreateNew';
import { connect } from 'react-redux';
import API from '../utils/API';
import { useAuth0 } from "../react-auth0-wrapper";

class Registry extends Component {

  state = {
    // section: "about",
    userID: "",
    companyField: "",
    aboutField: "",
    cards: [],
    supplies: [],
    services: [],
    other: []
  }

  componentWillMount() {
    console.log(this.props);
    this.setState({ userID: this.props.userID });
    this.getRegistry(this.props.userID);
    // this.getServices(this.props.userID);
    // this.getSupplies(this.props.userID);
    // this.getOther(this.props.userID);
    // this.getServices2();
    // this.getCards();
  }

  componentWillReceiveProps() {
    this.getRegistry(this.props.userID);
    // this.getServices2();
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
          cards: res.data[0].cards,
          companyField: res.data[0].companyName,
          aboutField: res.data[0].aboutUs
        })
      })
      .then( () => { return (this.getCards()) } )
      .catch(err => console.log(err));

  }

  getServices2 = () => {
    console.log("fetching services");
    for (let i = 0; i < this.state.cards.length; i++) {
      console.log("running teh loop");
      if (this.state.cards[i].category == "Services") {
        if (this.state.services.indexOf(this.state.cards[i]) < 0) {
          this.state.services.push(this.state.cards[i]);
          console.log("foudn somthing");
          this.setState({ services: this.state.services })
        }
      }
    };
    this.setState({ services: this.state.services });
  }

  getSupplies2 = () => {
    console.log("fetching supplies");
    for (let i = 0; i < this.state.cards.length; i++) {
      console.log("running teh loop");
      if (this.state.cards[i].category == "Supplies") {
        if (this.state.supplies.indexOf(this.state.cards[i]) < 0) {
        this.state.supplies.push(this.state.cards[i]);
        console.log("foudn somthing");
        this.setState({ services: this.state.services })
        }
      }
    }
    this.setState({ supplies: this.state.supplies });
  }

  getOther2 = () => {
    console.log("fetching other cards");
    for (let i = 0; i < this.state.cards.length; i++) {
      console.log("running teh loop");
      if (this.state.cards[i].category == "Other") {
        if (this.state.other.indexOf(this.state.cards[i]) < 0) {
        this.state.other.push(this.state.cards[i]);
        console.log("foudn somthing");
        this.setState({ services: this.state.services })
      }
    }
  }
    this.setState({ other: this.state.other });
  }

  getCards = () => {
    this.getServices2();
    this.getSupplies2();
    this.getOther2();
  }

  getServices = (id) => {
    // this.getServices2();
    console.log("will this work?");
    API.getServices(id)
      .then(res => {
        console.log(res.data);
        this.setState({ services: res.data })
      })
      .then(console.log("atleast it ran"))
      .catch(err => console.log(err));
  }

  getSupplies = (id) => {
    API.getSupplies(id)
      .then(res => {
        console.log(res.data);
        this.setState({ supplies: res.data })
      })
      .catch(err => console.log(err));
  }

  getOther = (id) => {
    API.getOther(id)
      .then(res => {
        console.log(res.data);
        this.setState({ other: res.data })
      })
      .catch(err => console.log(err));
  }

  createCompany = () => {
    console.log("creating company..");
    API.createCompany({
      // category: "",
      cards: [],
      userID: this.state.userID,
      companyName: this.state.companyField,
      aboutUs: this.state.aboutUs
    })
  }

  render() {
    // const { loading, user } = useAuth0();
    // const { lists } = this.props;
    return (
      <div className='registry'>

        <h3> Build your own page to show your project to the world! </h3>

        <h4>Name: {this.state.companyField ? this.state.companyField : "Name"}</h4>
        <input type="text" className="infoField" id="companyField" placeholder={this.state.companyField ? this.state.companyField : "The name of your company or project..."} onChange={this.handleFormInput} />
        <button onClick={this.createCompany}>Create!</button>

        <h4>About Us</h4>
        <textarea type="text" className="infoField" id="aboutField" placeholder={this.state.aboutField ? this.state.aboutField : "Tell the world about your company or project..."} onChange={this.handleFormInput} />

        <h4>Your Registry</h4>
        <h5>Create a list of things you will need</h5>

        <button onClick={this.getCards}>Do it</button>

        <div className="listName" >
          {/* <h2 className='listHeader'>Services</h2>
          <hr /> */}
          {/* {this.state.services.map(list => */}
          <List
            // key={list._id}
            category={"Services"}
            cards={this.state.services}
            companyName={this.state.companyField}
            aboutUs={this.state.aboutField}
            userID={this.props.userID}
            path={this.props.match.path}
          />
          {/* )} */}
          <ActionButton
            category={"Services"}
            companyName={this.state.companyField}
            aboutUs={this.state.aboutField}
            userID={this.state.userID}
          />
        </div>


        <div className="listName" >
          {/* <h2 className='listHeader'>Supplies</h2>
          <hr /> */}
          {/* {this.state.cards.map(list => */}
          <List
            // key={list._id}
            category={"Supplies"}
            cards={this.state.supplies}
            companyName={this.state.companyField}
            aboutUs={this.state.aboutField}
            userID={this.props.userID}
            path={this.props.match.path}
          />
          {/* )} */}
          <ActionButton
            category={"Supplies"}
            companyName={this.state.companyField}
            aboutUs={this.state.aboutField}
            userID={this.state.userID}
          />
        </div>

        <div className="listName" >
          {/* <h2 className='listHeader'>Other</h2>
          <hr /> */}
          {/* {this.state.services.map(list => */}
          <List
            // key={list._id}
            category={"Other"}
            cards={this.state.other}
            companyName={this.state.companyField}
            aboutUs={this.state.aboutField}
            userID={this.props.userID}
            path={this.props.match.path}
          />
          {/* )} */}
          <ActionButton
            category={"Other"}
            companyName={this.state.companyField}
            aboutUs={this.state.aboutField}
            userID={this.state.userID}
          />
        </div>

        {/*
        <div className = "listName" >
          <h2 className='listHeader'>Other</h2>
          <hr />
        {this.state.cards.map(list =>
          <List 
            key={list._id}
            category={"Other"}
            cards={(list.category === "Other") ? list.cards : []}
            companyName={this.state.companyField}
            aboutUs={this.state.aboutField}
            userID={this.props.userID}
            path={this.props.match.path}
          />
        )}
        <ActionButton                 
                category={"Other"}
                companyName={this.state.companyField}
                aboutUs={this.state.aboutField}
                userID={this.state.userID}
            /> 
        </div> */}



        {/* {this.state.cards.map(list =>
          <List key={list._id}
            listID={list._id}
            category={list.category}
            cards={list.cards}
            companyName={this.state.companyField}
            aboutUs={this.state.aboutField}
            userID={this.props.userID}
            path={this.props.match.path}
          />
        )} */}
        {/* <ActionButton 
          companyName={this.state.companyField}
          aboutUs={this.state.aboutField}
          userID={this.props.userID}
          list
        /> */}
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