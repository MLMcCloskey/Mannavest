import React, { Component, useState } from 'react';
import About from './About';
import ContributeSection from './ContributeSection';
import { connect } from 'react-redux';
import API from '../utils/API';
import { useAuth0 } from "../react-auth0-wrapper";

class CompanyPage extends Component {

  state = {
    section: "about",
    userID: "",
    companyName: "",
    aboutUs: "",
    categories: []
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
          categories: res.data,
          companyName: res.data[0].companyName,
          aboutUs: res.data[0].aboutUs
        })
      })
      .catch(err => console.log(err));
  }

  setContribute = () => {
    this.setState({ section: "contribute" });
  }

  setAbout = () => {
    this.setState({ section: 'about' });
  }

  render() {
    // const { loading, user } = useAuth0();
    const { lists } = this.props;

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

          {this.state.categories.map(list =>
            this.state.section === 'contribute' ? <ContributeSection key={list._id}
              listID={list._id}
              category={list.category}
              cards={list.cards}
              path={this.props.match.path}
            /> : <p />
          )}

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