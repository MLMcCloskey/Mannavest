const router = require('express').Router();
const cardController = require('../../controller/cardController');

// router.route('/')
//     .get(cardController.test)

router.route('/createCategory')
    .post(cardController.create);

router.route('/addCard')
    .post(cardController.addCard)

    
module.exports = router;