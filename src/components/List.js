import React from 'react';
import ListItem from './ListItem';
import ActionButton from './CreateNew';

const List = (props) => {
    return (
        <div className="listName">
            <h2 className='listHeader'>{props.category}</h2>
            <hr />
                { props.cards.map(card =>                
                    <ListItem 
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        image={card.image}
                        cost={card.cost}
                        progress={0}
                    />
                )}
            <ActionButton listID={props.listID}/>
        </div>
    )
}

export default List;