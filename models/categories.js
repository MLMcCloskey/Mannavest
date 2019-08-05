const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var categoriesScheme = new Schema({    
    userID: {
      type: String,
      trim: false,
      required: true
    },
    companyName: {
      type: String,
      trim: false,
      required: true
    },
    aboutUs: {
      type: String,
      trim: false
    },
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