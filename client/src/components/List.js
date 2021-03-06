import React from 'react';
import ListItem from './ListItem';
// import ActionButton from './CreateNew';

const List = (props) => {
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
            {/* <ActionButton 
                listID={props.listID}
                category={props.category}
                companyName={props.companyName}
                aboutUs={props.aboutUs}
                userID={props.userID}
            />  */}
        </div>
    )
}

export default List;