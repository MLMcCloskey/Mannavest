const router = require('express').Router();
const cardController = require('../../controller/cardController');
const app = require('express');

// router.route('/')
//     .get(cardController.test)

router.route('/getRegistry')
    .post(cardController.getRegistry)

router.route('/createCategory')
    .post(cardController.create);

router.route('/addCard')
    .post(cardController.addCard)

router.route('/findCompany')
    .post(cardController.findCompany)

router.route('/findAllCompanies')
    .post(cardController.findAllCompanies)



// app.post("/charge", async (req, res) => {
//     try {
//       let {status} = await stripe.charges.create({
//         amount: 2000,
//         currency: "usd",
//         description: "An example charge",
//         source: req.body
//       });

//       res.json({status});
//     } catch (err) {
//       res.status(500).end();
//     }
//   });

router.route("/charge", async (req, res) => {
    console.log('running from route...');
    try {
        let { status } = await stripe.charges.create({
            amount: 2000,
            currency: "usd",
            description: "An example charge",
            source: req.body
        });

        res.json({ status });
    } catch (err) {
        res.status(500).end();
    }
});

router.route('/chargeIt')
    .post(cardController.chargeIt)


module.exports = router;