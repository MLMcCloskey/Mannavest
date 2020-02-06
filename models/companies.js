const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var comapaniesScheme = new Schema({    
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
        default: "Woopie"
    },
    cards: {
      type: Array,
    }
})


const comapanies = mongoose.model('comapanies', comapaniesScheme);

module.exports = comapanies;