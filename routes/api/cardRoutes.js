const router = require('express').Router();
const cardController = require('../../controller/cardController');

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

    
module.exports = router;