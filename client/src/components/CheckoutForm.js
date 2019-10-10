import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
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
    address_city: '',
    address_country: '',
    address_line1: '',
    address_line2: '',
    address_state: '',
    name: '',
    metadata: {}
  };

  handleChange = ({ error }) => {
    if (error) {
      this.setState({ errorMessage: error.message });
    }
  };

  // gather text from inputs
  handleInputChange = e => {
    let field = e.target.id;
    this.setState({ [field]: e.target.value })
}

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
    let { token } = await this.props.stripe.createToken({
      name: this.state.name,
      address_city: this.state.address_city,
      address_country: this.state.address_country,
      address_line1: this.state.address_line1,
      address_line2: this.state.address_line2,
      address_state: this.state.address_state
    });
    console.log(token);
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    console.log(response.body.getReader());

    if (response.ok) console.log("Purchase Complete!")
  }

  // written to match my existing controller
  async mySubmit(e) {
    e.preventDefault();
    let { token } = await this.props.stripe.createToken({ name: this.state.name });
    // console.log(token);
    API.chargeIt({ body: token.id })
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div className="CardDemo">
        <form
          className='ccForm'
        // onSubmit={this.handleSubmit.bind(this)}
        >
          <div className='form-group'>
            <label htmlFor='name' className='ccSection'> Name </label>
            <input type='text' className='ccField CardField StripeElement' placeholder='Name' id='name' onChange={this.handleInputChange}></input>
          </div>

          <div className='form-group'>
            <label htmlFor='address_line1' className='ccSection'> Address </label>
            <input type='text' className='ccField CardField StripeElement' placeholder='address_line1' id='address_line1' onChange={this.handleInputChange}></input>

            {/* <label htmlFor='address_line2' className='ccSection'> Address Line 2 </label> */}
            <input type='text' className='ccField CardField StripeElement' placeholder='address_line2' id='address_line2' onChange={this.handleInputChange}></input>
          </div>

          <div className='form-group'>
            <label htmlFor='address_city' className='ccSection'> City </label>
            <input type='text' className='ccField CardField StripeElement' placeholder='address_city' id='address_city' onChange={this.handleInputChange}></input>
          </div>

          <div className='form-group'>
            <label htmlFor='address_state' className='ccSection'> State </label>
            <input type='text' className='ccField CardField StripeElement' placeholder='address_state' id='address_state' onChange={this.handleInputChange}></input>
          </div>

          <div className='form-group'>
            <label htmlFor='address_country' className='ccSection'> Country </label>
            <input type='text' className='ccField CardField StripeElement' placeholder='address_country' id='address_country' onChange={this.handleInputChange}></input>
          </div>
          {/*
          *metadata*
        */}
        <div className='form-group'>
          <label htmlFor='metadata' className='ccSection'> Amount </label>
          <input type='number' className='ccField CardField StripeElement' placeholder='amount to donate' id='metadata.amount' onChange={this.handleInputChange}></input>
        </div>

          <label>
            ~~~~~~~~~~~~~~~~ Card Details ~~~~~~~~~~~~~~~~
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