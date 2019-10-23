import React, { Component } from 'react';
import List from './List';
// import Loading from './Loading';
import ActionButton from './CreateNew';
import { connect } from 'react-redux';
import API from '../utils/API';
// import { useAuth0 } from "../react-auth0-wrapper";

class Registry extends Component {

  state = {
    // section: "about",
    userID: "",
    companyField: "",
    companyName: "",
    aboutField: "",
    cards: [],
    supplies: [],
    services: [],
    other: []
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
          cards: res.data[0].cards,
          companyField: res.data[0].companyName,
          companyName: res.data[0].companyName,
          aboutField: res.data[0].aboutUs
        })
      })
      .then( () => { return (this.getCards()) } )
      .catch(err => console.log(err));

  }

  getServices3 = () => {
    console.log("filtering cards for Services section...");
    let servicios = this.state.cards.filter(service => service.category === "Services");
    console.log(servicios);
    this.setState({ services: servicios })
  }

  getSupplies3 = () => {
    console.log("filtering cards for Supplies section...");
    let supplements = this.state.cards.filter(supply => supply.category === "Supplies");
    console.log(supplements);
    this.setState({ supplies: supplements })
  }

  getOther3 = () => {
    console.log("filtering cards for Other section...");
    let things = this.state.cards.filter(thing => thing.category === "Other");
    console.log(things);
    this.setState({ other: things })
  }

  getCards = () => {
    this.getServices3();
    this.getSupplies3();
    this.getOther3();
  }

  createCompany = () => {
    console.log("creating company..");
    API.createCompany({
      cards: [],
      userID: this.state.userID,
      companyName: this.state.companyField,
      aboutUs: this.state.aboutField
    });
    this.getRegistry(this.props.userID);
  }

  updateCompanyName = () => {
    console.log("updating company name");
    API.updateName({ 
      userID: this.state.userID,
      companyName: this.state.companyField
    })
  }

  updateComapnyInfo = () => {
    console.log("updating company info");
    API.updateInfo({ 
      userID: this.state.userID,
      aboutUs: this.state.aboutField
    })
  }

  render() {
    // const { loading, user } = useAuth0();
    // const { lists } = this.props;
    return (
      <div className='registry'>

        <h3> Build your own page to show your project to the world! </h3>

        <h4>Name: {this.state.companyField ? this.state.companyField : "Name"}</h4>
        {this.state.companyName ? <div><input type="text" className="infoField" id="companyField" placeholder={this.state.companyField ? this.state.companyField : "The name of your company or project..."} onChange={this.handleFormInput} /> <button onClick={this.updateCompanyName}>Update!</button></div>
         :<div><input type="text" className="infoField" id="companyField" placeholder={this.state.companyField ? this.state.companyField : "The name of your company or project..."} onChange={this.handleFormInput} /> <button onClick={this.createCompany}>Create!</button></div>}

        <h4>About Us</h4>
        <textarea type="text" className="infoField" id="aboutField" placeholder={this.state.aboutField ? this.state.aboutField : "Tell the world about your company or project..."} onChange={this.handleFormInput} />
        <button onClick={this.updateComapnyInfo}>Update!</button>

        <h4>Your Registry</h4>
        <h5>Create a list of things you will need</h5>
        <p>Need help? Try looking for <a href='https://lmgtfy.com/?q=what+does+it+take+to+start+a+business&s=g' target='_blank' rel='noopener noreferrer'>suggestions</a></p>
        {/* <button onClick={this.getCards}>Do it</button> */}

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
          <ActionButton
            category={"Other"}
            companyName={this.state.companyField}
            aboutUs={this.state.aboutField}
            userID={this.state.userID}
          />
        </div>

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