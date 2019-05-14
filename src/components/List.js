import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
    return (
        <div className="listName">
            <h3>{props.title}</h3>
            <ListItem text="Build the app."/>
        </div>
    )
}

export default List;