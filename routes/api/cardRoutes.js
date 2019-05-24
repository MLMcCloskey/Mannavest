const router = require("express").Router();
const cardController = require("../../controllers/cardController");


router.route("/upload")
    .post(cardController.create);

    
module.exports = router;