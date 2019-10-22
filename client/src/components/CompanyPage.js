import React, { Component } from 'react';
import About from './About';
// import ContributeSection from './ContributeSection';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import API from '../utils/API';
// import { useAuth0 } from "../react-auth0-wrapper";

class CompanyPage extends Component {

  state = {
    section: "about",
    userID: "",
    companyName: "",
    aboutUs: "",
    cards: [],
    services: [],
    supplies: [],
    other: []
  }

  componentDidMount() {
    console.log(this.props);
    // this.setState({userID: this.props.userID});
    this.findCompany(this.props.match.params.companyName);
  }

  componentWillReceiveProps() {
    this.findCompany();
  }

  findCompany = (companyName) => {
    API.findCompany(companyName)
      .then(res => {
        this.setState({
          cards: res.data[0].cards,
          companyName: res.data[0].companyName,
          aboutUs: res.data[0].aboutUs
        })
      })

      // .then(() => { return (this.getServices3()) })
      // .then(() => { return (this.getSupplies3()) })
      // .then(() => { return (this.getOther3()) })
      .then(() => { return ( this.categorize()) })
      .catch(err => console.log(err));
  }

  getServices3 = () => {
    console.log("im a crazy bastard");
    let servicios = this.state.cards.filter(service => service.category === "Services");
    console.log(servicios);
    this.setState({ services: servicios })
  }

  getSupplies3 = () => {
    console.log("im a crazy bastard");
    let supplements = this.state.cards.filter(supply => supply.category === "Supplies");
    console.log(supplements);
    this.setState({ supplies: supplements })
  }

  getOther3 = () => {
    console.log("im a crazy genius");
    let things = this.state.cards.filter(thing => thing.category === "Other");
    console.log(things);
    this.setState({ other: things })
  }
  
  categorize = () => {
    this.getServices3();
    this.getSupplies3();
    this.getOther3();
  }

  setContribute = () => {
    this.setState({ section: "contribute" });
  }

  setAbout = () => {
    this.setState({ section: 'about' });
  }

  render() {
    // const { loading, user } = useAuth0();
    // const { lists } = this.props;

    return (
      <div className='registry'>
        <h2>{this.state.companyName}</h2>

        <div className='innerNav'>
          <h5 className='innerNavigation' onClick={this.setAbout}>About Us</h5>
          <h5 className='innerNavigation' onClick={this.setContribute}>What We Need</h5>
          <h5 className='innerNavigation'>What We Offer</h5>
        </div>

        <hr />

        <div className='comapanyContent'>
          {/* <h3>About</h3> */}
          {/* <p>{this.state.aboutUs}</p> */}
          {this.state.section === 'about' ? <About about={this.state.aboutUs} /> : <p />}

          {/* {this.state.cards.map(list =>
            this.state.section === 'contribute' ? <ContributeSection key={list._id}
              listID={list._id}
              category={list.category}
              cards={list}
              path={this.props.match.path}
            /> : <p />
          )} */}

          {this.state.section === 'contribute' ? <div className='contributionRegistry'>
            <div className="listName">
              <h2 className='listHeader'>Services</h2>
              <hr />
              {this.state.services.map(list =>
                this.state.section === 'contribute' ? <ListItem key={list._id}
                  title={list.title}
                  description={list.description}
                  image={list.image}
                  cost={list.cost}
                  progress={list.progress}
                  category={list.category}
                  path={this.props.match.path}
                /> : <p />
              )}
            </div>

            <div className="listName">
              <h2 className='listHeader'>Supplies</h2>
              <hr />
              {this.state.supplies.map(list =>
                this.state.section === 'contribute' ? <ListItem key={list._id}
                title={list.title}
                description={list.description}
                image={list.image}
                cost={list.cost}
                progress={list.progress}
                category={list.category}
                path={this.props.match.path}
                /> : <p />
              )}
            </div>

            <div className="listName">
              <h2 className='listHeader'>Other</h2>
              <hr />
              {this.state.other.map(list =>
                this.state.section === 'contribute' ? <ListItem key={list._id}
                title={list.title}
                description={list.description}
                image={list.image}
                cost={list.cost}
                progress={list.progress}
                category={list.category}
                path={this.props.match.path}
                /> : <p />
              )}
            </div>

          </div> : <div></div>}
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

export default connect(mapStateToProps)(CompanyPage);