import React, { Component, useState } from 'react';
import AboutUs from './AboutUs';
import ContributeSection from './ContributeSection';
import { connect } from 'react-redux';
import API from '../utils/API';
import { useAuth0 } from "../react-auth0-wrapper";

class CompanyPage extends Component {

  state = {
    section: "about",
    userID: "",
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
          categories: res.data
        })
      })
      .catch(err => console.log(err));
  }

  renderCards = () => {
    console.log("crazy idea");
    return (
      this.state.categories.map(list =>
        <ContributeSection key={list._id}
          listID={list._id}
          category={list.category}
          cards={list.cards} 
          params={this.props.match.params}
        />
      )
    )
  }

  render() {
    // const { loading, user } = useAuth0();
    const { lists } = this.props;
    return (
      <div className='registry'>
        <div className='innerNav'>
          <h5 className='innerNavigation'>About Us</h5>
          <h5 className='innerNavigation' onClick={this.renderCards}>What We Need</h5>
        </div>

        {/* {(this.state.section === "about") ? <AboutUs /> : <ContributeSection props={this.state.categories} />} */}
        {this.state.categories.map(list =>
          <ContributeSection key={list._id}
            listID={list._id}
            category={list.category}
            cards={list.cards}
            path={this.props.match.path}
          />          
        )}

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