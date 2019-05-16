import { CONSTANTS } from '../actions';

let listID = 2;
let cardID =2

const initialState = [
    {
        category: "Services",
        id: 0,
        cards: [
            {
                id: 0,
                title: "Web Developer",
                description: "Blah blah test",
                image: 'http://clipart-library.com/data_images/405967.png',
                cost: 1000
            },
            {
                id: 1,
                title: "Marketing",
                description: "Blah blah test2",
                image: 'http://clipart-library.com/images/pTo5B4ekc.jpg',
                cost: 2000
            },
        ]
    },
    {
        category: "Supplies",
        id: 1,
        cards: [
            {
                id: 0,
                title: "Computers",
                description: "That other thing",
                image: 'http://clipart-library.com/images/6iyXxzgbT.png',
                cost: 8000
            },
            {
                id: 1,
                title: "Cleaning Supplies",
                description: "The other other thing",
                image: 'http://clipart-library.com/img/1481756.jpg',
                cost: 200
            },
        ]
    }
]

const listReducer = (state = initialState, action) => {
    switch(action.type) {
        case CONSTANTS.ADD_LIST:
            const newList= {
                category: action.payload,
                cards: [],
                id: listID
            }
            listID +=1;
            return [...state, newList];

        case CONSTANTS.ADD_CARD:
            const newCard = {
                id: cardID,
                title: action.payload.title,
                description: action.payload.description,
                image: action.payload.image,
                cost: action.payload.cost
            }
            cardID +=1;

            const newState = state.map(list => {
                if (list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            });

            return newState;

        default:
            return state;
    }
};

export default listReducer;