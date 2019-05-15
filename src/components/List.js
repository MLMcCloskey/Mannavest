import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
    return (
        <div className="listName">
            <h3>{props.title}</h3>
                { props.cards.map(card =>                
                    <ListItem 
                        title={card.title}
                        text={card.text}
                        image={card.image}
                    />
                )}
        </div>
    )
}

export default List;