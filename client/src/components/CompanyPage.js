import React, { Component, useState } from 'react';
import List from './List';
import ActionButton from './CreateNew';
import { connect } from 'react-redux';
import API from '../utils/API';
import { useAuth0 } from "../react-auth0-wrapper";

class CompanyPage extends Component {

  state = {
    section: "about",
    userID: "",
    categories: []
  }
  
  componentDidMount() {
    console.log(this.props);
    this.setState({userID: this.props.userID});
    this.findCompany();
  }

  componentWillReceiveProps() {
    this.findCompany();
  }

  findCompany    = () => {
    API.findCompany ()
      .then(res => {
        this.setState({
          categories: res.data
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    // const { loading, user } = useAuth0();
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