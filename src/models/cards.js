const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var cardScheme = new Schema({
    title: {
        type: String,
        trim: false,
        required: true
    },
    category: {
        type: String,
        trim: false,
        required: true
    },
    description: {
        type: String,
        trim: false,
        required: true
    },
    imgage: {
        type: String
    },
    cost: {
        type: Number
    },
    progress: {
        type: Number
    }
})


const cards = mongoose.model('cards', cardScheme);

module.exports = cards;