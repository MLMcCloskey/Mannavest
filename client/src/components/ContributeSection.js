import React from 'react';
import ListItem from './ListItem';
import { useAuth0 } from '../react-auth0-wrapper';

const Contribute = (props) => {
    const { user } = useAuth0;
    return (
        <div className="listName">
            <h2 className='listHeader'>{props.category}</h2>
            <hr />
                { props.cards.map(card =>                
                    <ListItem 
                        key={card.title}
                        title={card.title}
                        description={card.description}
                        image={card.image}
                        cost={card.cost}
                        progress={card.progress}
                        category={props.category}
                        path={props.path}
                    />
                )}
        </div>
    )
}

export default Contribute;