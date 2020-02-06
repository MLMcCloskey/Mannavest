import React from 'react';
import ListItem from './ListItem';
// import { useAuth0 } from '../react-auth0-wrapper';

const Contribute = (props) => {
    // const { user } = useAuth0;
    return (
        <div className="beepBoop">
            {/* <h2 className='listHeader'>{props.category}</h2>
            <hr /> */}
                {/* {/* { props.map(card =>                 */}
                    <ListItem 
                        key={props.cards.title}
                        title={props.cards.title}
                        description={props.cards.description}
                        image={props.cards.image}
                        cost={props.cards.cost}
                        progress={props.cards.progress}
                        category={props.category}
                        path={props.path}
                    />
                {/* )} */ }
        </div>
    )
}

export default Contribute;