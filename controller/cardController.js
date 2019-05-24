const db = require('../models');

module.exports = {

// find all company information when route hit
    findAll: (req, res) => {
        console.log("Loading them all");
        db.cards
            .find({})
            .sort({ style: -1 })
            .then(console.log("does this work?")).then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
}