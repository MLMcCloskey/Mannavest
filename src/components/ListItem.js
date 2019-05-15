import React from 'react';
// import ActionButton from './CreateNew';

const ListItem = (props) => {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">Contribute</a>
            </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">$0 out of ${props.cost}</li>
                </ul>
        </div>
        // <ActionButton />
    )
}

export default ListItem;