import React, { Component } from 'react';

class ActionButton extends React.Component {
    state = {
        formOpen: false,
        text: ""
    }

    // methods ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    openForm = () => {
        this.setState({ formOpen: true })
    }

    closeForm = e => {
        this.setState({ formOpen: false })
    }

    handleInputChange = e => {
        this.setState({ text: e.target.value })
    }

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? "+ Add another section" : "+ Add another card";

        return (
            <div>
                <button type="button" 
                        onClick={this.openForm}
                        className="btn btn-secondary btn-lg btn-block "
                        data-toggle="modal" data-target="#exampleModal"
                        >
                    {buttonText}
                </button>
            </div>
        )
    }

    renderForm = () => {
        const { list } = this.props;
        
        return (
            <div className="modal" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                        ...
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

//             <div className="modal" tabIndex="-1" role="dialog">
//   <div className="modal-dialog" role="document">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title">Modal title</h5>
//         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div className="modal-body">
//         <p>Modal body text goes here.</p>
//       </div>
//       <div className="modal-footer">
//         <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//         <button type="button" className="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
        )
    }

    // Render ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

export default ActionButton;