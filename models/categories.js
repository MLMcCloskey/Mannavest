const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var categoriesScheme = new Schema({    
    category: {
        type: String,
        trim: false,
        // required: true
    },
    cards: {
      type: Array,
    }
})


const categories = mongoose.model('categories', categoriesScheme);

module.exports = categories;