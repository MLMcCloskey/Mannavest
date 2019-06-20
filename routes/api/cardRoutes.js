const router = require('express').Router();
const cardController = require('../../controller/cardController');

router.route('/')
    .get(cardController.test)
    
router.route('/createCategory')
    .post(cardController.create);

    
module.exports = router;