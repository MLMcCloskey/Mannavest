import React from 'react';
import ListItem from './ListItem';
import ActionButton from './CreateNew';

const List = (props) => {
    return (
        <div className="listName">
            <h3>{props.category}</h3>
                { props.cards.map(card =>                
                    <ListItem 
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        image={card.image}
                        cost={card.cost}
                    />
                )}
            <ActionButton listID={props.listID}/>
        </div>
    )
}

export default List;