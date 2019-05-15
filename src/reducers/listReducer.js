const initialState = [
    {
        title: "Services",
        id: 0,
        cards: [
            {
                id: 0,
                title: "Web Developer",
                text: "Blah blah test",
                image: 'http://clipart-library.com/data_images/405967.png',
                cost: 1000
            },
            {
                id: 1,
                title: "Marketing",
                text: "Blah blah test2",
                image: 'http://clipart-library.com/images/pTo5B4ekc.jpg',
                cost: 2000
            },
        ]
    },
    {
        title: "Supplies",
        id: 1,
        cards: [
            {
                id: 0,
                title: "Computers",
                text: "That other thing",
                image: 'http://clipart-library.com/images/6iyXxzgbT.png',
                cost: 8000
            },
            {
                id: 1,
                title: "Cleaning Supplies",
                text: "The other other thing",
                image: 'http://clipart-library.com/img/1481756.jpg',
                cost: 200
            },
        ]
    }
]

const listReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default listReducer;