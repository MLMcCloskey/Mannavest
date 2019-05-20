import React, { Component } from 'react';
// import ActionButton from './CreateNew';

class ListItem extends React.Component {
    constructor(...props) {
        super (...props);
        this.state = { 
            progress: this.props.progress,
            percentage: 0
        }
    }
    handleContribution = (e) => {
        e.preventDefault();
        this.setState({ progress: this.state.progress +50 });
        
    }
    handleProgress = (e) => {
        e.preventDefault();
        let progressBar = document.getElementById(this.props.title+'ProgressBar');
        const percentage = (this.state.progress / this.props.cost) * 100;
        // progressBar.style.backgroundColor = 'green';
        progressBar.style.width = percentage + '%';
        return console.log(percentage);
    }
    render() {
        return (
            <div className="card">
                <img src={this.props.image} className="card-img-top" alt={this.props.title} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                    <a href="#" className="btn btn-primary" onMouseDown={this.handleContribution} onClick={this.handleProgress}>Contribute</a>
                </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            ${this.state.progress} out of ${this.props.cost}
                            <div id={this.props.title+"ProgressBar"} className='progressBar' />
                        </li>
                    </ul>
            </div>
            // <ActionButton />
        )
    }
    
}

export default ListItem;