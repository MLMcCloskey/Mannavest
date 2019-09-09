import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import API from '../utils/API';

const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        fontFamily: 'Open Sans, sans-serif',
        letterSpacing: '0.025em',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#c23d4b',
      },
    }
  }
};

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  state = {
    errorMessage: '',
  };

  handleChange = ({error}) => {
    if (error) {
      this.setState({errorMessage: error.message});
    }
  };

  // taken from example
  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("submitting payment...");
    if (this.props.stripe) {
      this.props.stripe.createToken().then(this.props.handleResult);
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  // taken from docs
  async submit(ev) {
    ev.preventDefault();
    let {token} = await this.props.stripe.createToken({name: "Name"});
    console.log(token);
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
  
    console.log(response.body.getReader());

    if (response.ok) console.log("Purchase Complete!")
  }

  // written to match my existing controller
  async mySubmit(e) {
    e.preventDefault();    
    let {token} = await this.props.stripe.createToken({name: "Name"});
    // console.log(token);
    API.chargeIt({body: token.id})
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div className="CardDemo">
        <form
          className='ccForm'
          // onSubmit={this.handleSubmit.bind(this)}
        >
          {/* <label> Name </label> */}

          <label>
            ~~~~~~~~~~~~~~~~ Card details ~~~~~~~~~~~~~~~~
            <CardElement
              onChange={this.handleChange}
              {...createOptions()}
              className='ccField'
            />
          </label>
          <div className="error" role="alert">
            {this.state.errorMessage}
          </div>
          <button className="btn btn-primary" onClick={this.submit}>Pay</button>
        </form>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);