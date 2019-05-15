const initialState = [
    {
        title: "Sample Section",
        id: 0,
        cards: [
            {
                id: 0,
                title: "Services",
                text: "Blah blah test",
                image: 'http://clipart-library.com/data_images/405967.png'
            },
            {
                id: 1,
                title: "Supplies",
                text: "Blah blah test2",
                image: 'http://clipart-library.com/img/1481756.jpg'
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