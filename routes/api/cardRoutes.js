const router = require('express').Router();
const cardController = require('../../controller/cardController');


router.route('/createCategory')
    .post(cardController.create);

    
module.exports = router;