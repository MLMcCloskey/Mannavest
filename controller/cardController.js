const db = require('../models');
const stripe = require("stripe")("sk_test_6o7OKH2L9Fj4rmH7u0z4fBVH001CyHRvbi");

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
        console.log(req.body);
        // console.log(req.body);
        db.categories
            .updateOne({ userID: req.body.card.userID },
                {
                    $push: {
                        cards: [{
                            title: req.body.card.title,
                            description: req.body.card.description,
                            cost: req.body.card.cost,
                            image: req.body.card.image,
                            progress: 0,
                            category: req.body.category
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
        console.log("loading list of companies...");
        db.categories
            .find({})
            .sort({companyName: 1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findCompany: (req, res) => {
        console.log(req.body);
        let company = (JSON.stringify(req.body).substring(1).split(":")[0]);
        console.log(company);
        db.categories
            .find({ companyName: eval(company) })
            // .sort({ name: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    // test: (req, res) => {
    //     console.log("you can do this")
    //     res.send("../public/index.html");
    // }

    chargeIt: async (req, res) => {
    // app.post("/charge", async (req, res) => {
        try {
          let {status} = await stripe.charges.create({
            amount: 2000,
            currency: "usd",
            description: "An example charge",
            source: req.body
          });
      
          res.json({status});
        } catch (err) {
          res.status(500).end();
        }      
    },

    createCompany: (req, res) => {
        console.log("Creating new company...");
        console.log(req.body);
        db.categories
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    updateInfo: (req, res) => {
        console.log("updating their info...");
        console.log (req.body)
        db.categories
            .findOneAndUpdate({ userID: req.body.userID},
              { $set: { aboutUs: req.body.aboutUs }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    updateName: (req, res) => {
        console.log("updating their info...");
        console.log (req.body)
        db.categories
            .findOneAndUpdate({ userID: req.body.userID},
              { $set: { companyName: req.body.companyName }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // getServices: (req, res) => {
    //     let user = (JSON.stringify(req.body).substring(1).split(":")[0]);
    //     console.log(user);
    //     db.categories
    //         .find({ userID: eval(user), category: "Services" })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },

    // getSupplies: (req, res) => {
    //     let user = (JSON.stringify(req.body).substring(1).split(":")[0]);
    //     console.log(user);
    //     console.log(req.body);
    //     db.categories
    //         .find({ userID: eval(user), category: "Supplies" })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },

    // getOther: (req, res) => {
    //     let user = (JSON.stringify(req.body).substring(1).split(":")[0]);
    //     console.log(user);
    //     db.categories
    //         .find({ userID: eval(user), category: "Other" })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },

}