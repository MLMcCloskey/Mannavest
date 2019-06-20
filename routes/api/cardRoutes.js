const router = require("express").Router();
const cardController = require("../../controller/cardController");


router.route("/upload")
    .post(cardController.create);

    
module.exports = router;