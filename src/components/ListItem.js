import React from 'react';

const ListItem = (props) => {
    return (
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Contribute</a>
            </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">$0 out of $1000</li>
                </ul>
        </div>
    )
}

export default ListItem;