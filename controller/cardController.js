const db = require('../models');

module.exports = {
    create: function (req, res) {
        console.log('new card loading');
        db.categories
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

// find all company information when route hit
    findAll: (req, res) => {
        console.log("Loading them all");
        db.cards
            .find({})
            .then(console.log("does this work?")).then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    test: (req, res) => {
        console.log("you can do this")
        res.send("../public/index.html");
    }
}