import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addList } from '../actions';


class ActionButton extends React.Component {
    state = {
        formOpen: false,
        title: "",
        description: "",
        cost: 0,
        image: "",
        category: ""
    }

    // methods ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    openForm = (e) => {
        e.preventDefault();
        this.setState({ formOpen: true });
    }

    closeForm = e => {
        e.preventDefault();
        this.setState({ formOpen: false });
        this.handleAddList();
    }

    handleInputChange = e => {
        let field = e.target.id;
        this.setState({ [field]: e.target.value })
    }

    handleAddList = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const { category } = this.state;
        console.log("button pressed");

            if (category) {
                dispatch(addList(category))
            }
            else return;
    }

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? "+ Add another section" : "+ Add another card";

        return (
            <div>
                <button type="button" 
                        onClick={this.openForm}
                        className="btn btn-secondary btn-lg btn-block "
                        >
                    {buttonText}
                </button>
            </div>
        )
    }

    renderForm = () => {
        const { list } = this.props;
        
        if (!list) return (
            <form className='newCardForm'>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="What do you need?" onChange={this.handleInputChange} />
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" placeholder="Add a description" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="cost">Cost</label>
                    <input type="number" className="form-control" id="cost" placeholder="How much will it cost?" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="text" className="form-control" id="image" placeholder="Choose an image for the card" onChange={this.handleInputChange} />
                </div>
                <button type="submit" className="btn btn-secondary" onClick={this.formClose}>Cancel</button>
                <button type="submit" className="btn btn-primary" onClick={this.formClose}>Submit</button>
            </form>
        )
        else return (
            <form className='newListForm'>
                <div className='form-group'>
                    <label htmlFor='category'>Category</label>
                    <input type='text' className='form-control' id='category' onChange={this.handleInputChange} />
                </div>
                <button type="submit" className="btn btn-primary" onMouseDown={this.handleAddList} onClick={this.closeForm}>Submit</button>
            </form>
        )
    }

    // Render ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

export default connect () (ActionButton);