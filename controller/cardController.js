const db = require('../models');

module.exports = {
    create: function (req, res) {
        console.log(req.body);
        db.categories
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    addCard: (req, res) => {
        console.log("adding card to registry");
        console.log(req.body.card);
        console.log(req.body);
        db.categories
            .updateOne({ category: req.body.category },
                {
                    $push: {
                        cards: [{
                            title: req.body.card.title,
                            description: req.body.card.description,
                            cost: req.body.card.cost,
                            image: req.body.card.image,
                            progress: 0,
                        }]
                    }
                }
            )
            // .findOneAndUpdate({ category: "Supplies" },
            //     {
            //         $push: {
            //             cards: req.body.card
            //         }
            //     }
            // )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // find all company information when route hit
    getRegistry: (req, res) => {
        let user = (JSON.stringify(req.body).substring(1).split(":")[0]);
        console.log(user);
        db.categories
            .find({ userID: eval(user) })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findAllCompanies: (req, res) => {

    },

    findCompany: (req, res) => {

    }
    // test: (req, res) => {
    //     console.log("you can do this")
    //     res.send("../public/index.html");
    // }


}