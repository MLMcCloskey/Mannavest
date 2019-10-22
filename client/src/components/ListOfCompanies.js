import React from 'react';
import API from '../utils/API';
import { Link } from 'react-router-dom';

class ListOfCompanies extends React.Component {
  state = {
    names: []
  }

  componentDidMount() {
    console.log("mounting...");
    this.loadCompanyNames();
  }

  loadCompanyNames = () => {
    API.findAllCompanies()
      .then(res => {
        console.log(res.data);
        let justNames = [...new Set(res.data.map( resdata => {return resdata.companyName} ))]
        this.setState({ names: justNames })
        console.log(this.state.names)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
        <div className="companyNameList">
            <h2 className='companyListHeader'>Select a Company to Invest in.</h2>
            <hr />
                { this.state.names.map(company =>                                
                    <Link to={`invest/${company}`}
                        key={company}
                        className="companyName"
                    > 
                      {company} 
                    </Link>
                )}
        </div>
    )
  }
}

export default ListOfCompanies;