import React from 'react';
import { connect } from 'react-redux';
import { /*addList,*/ addCard } from '../actions';
import API from '../utils/API';


class ActionButton extends React.Component {
    state = {
        formOpen: false,
        title: "",
        description: "",
        cost: 0,
        image: "",
        category: this.props.category,
        companyName: "",
        aboutUs: "",
        userID: this.props.userID
    }

    // Lifecycle events ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    componentWillReceiveProps() {
        this.setState({
            companyName: this.props.companyName,
            aboutUs: this.props.aboutUs,
            userID: this.props.userID
        });
      }


    // methods ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    openForm = (e) => {
        e.preventDefault();
        this.setState({ formOpen: true });
    }

    closeForm = e => {
        e.preventDefault();
        this.setState({ formOpen: false });
    }

    handleInputChange = e => {
        let field = e.target.id;
        this.setState({ [field]: e.target.value })
    }

    handleAddList = (e) => {
        e.preventDefault();
        // const { dispatch } = this.props;
        // const { category, companyName, userID, aboutUs } = this.state;
        // if (category) {
        //     dispatch(addList(category))
        // }
        // else return;

        API.createCategory({
            category: this.props.category,
            cards: [],
            userID: this.state.userID,
            companyName: this.state.companyName,
            aboutUs: this.state.aboutUs
        })
        .catch(err => console.log(err));

        this.closeForm(e);
    }

    handleAddCard = (e) => {
        e.preventDefault();
        const { dispatch, listID } = this.props;
        const { title, description, cost, image } = this.state;
        // console.log(`props: ${this.props}`);
        // console.log(`state: ${this.state}`);
        // console.log(this.parentNode);
        if (title, description, cost, image) {
            dispatch(addCard(listID, title, description, cost, image))
        }
        else return;

        API.addCard({ 
            // id: this.props.listID,
            card: this.state,
            category: this.props.category
        })
        .catch(err => console.log(err));

        this.closeForm(e);
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
                    <input type="text" className="form-control" id="image" placeholder="Choose an image for the card or paste an img URL" onChange={this.handleInputChange} />
                </div>
                <button type="submit" className="btn btn-secondary form-buttons" onClick={this.closeForm}>Cancel</button>
                <button type="submit" className="btn btn-primary form-buttons" onMouseDown={this.handleAddCard}>Submit</button>
            </form>
        )
        else return (
            <form className='newListForm'>
                <div className='form-group'>
                    <label htmlFor='category'>Category</label>
                    <input type='text' className='form-control' id='category' onChange={this.handleInputChange} />
                </div>
                <button type="submit" className="btn btn-primary form-buttons" onMouseDown={this.handleAddList}>Submit</button>
            </form>
        )
    }

    // Render ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

export default connect () (ActionButton);