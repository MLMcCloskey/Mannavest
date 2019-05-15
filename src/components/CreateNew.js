import React, { Component } from 'react';

class ActionButton extends React.Component {
    state = {
        formOpen: false,
        title: "",
        description: "",
        cost: 0,
        image: ""
    }

    // methods ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    openForm = (e) => {
        e.preventDefault();
        this.setState({ formOpen: true });
        // this.renderForm();
    }

    closeForm = e => {
        e.preventDefault();
        this.setState({ formOpen: false })
    }

    handleInputChange = e => {
        // console.log(e.target.id);
        this.setState({ title: e.target.value })
    }

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? "+ Add another section" : "+ Add another card";

        return (
            <div>
                <button type="button" 
                        onClick={this.openForm}
                        className="btn btn-secondary btn-lg btn-block "
                        // data-toggle="modal" data-target="#exampleModal"
                        >
                    {buttonText}
                </button>
            </div>
        )
    }

    renderForm = () => {
        const { list } = this.props;
        
        return (
            <form className='newCardForm'>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="What do you need?" onChange={this.handleInputChange} />
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" placeholder="Add a description" />
                </div>
                <div className="form-group">
                    <label htmlFor="cost">Cost</label>
                    <input type="number" className="form-control" id="cost" placeholder="How much will it cost?" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.formClose}>Submit</button>
            </form>
        )
        // document.getElementById('#exampleModal').modal('show');
    }

    // Render ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

export default ActionButton;