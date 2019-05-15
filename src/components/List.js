import React from 'react';
import ListItem from './ListItem';
import ActionButton from './CreateNew';

const List = (props) => {
    return (
        <div className="listName">
            <h3>{props.title}</h3>
                { props.cards.map(card =>                
                    <ListItem 
                        key={card.id}
                        title={card.title}
                        text={card.text}
                        image={card.image}
                        cost={card.cost}
                    />
                )}
            <ActionButton />
        </div>
    )
}

export default List;