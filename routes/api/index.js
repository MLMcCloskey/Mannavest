const router = require("express").Router();
const cardRoutes = require("./cardRoutes");

// Card routes
router.use('/cardRoutes', cardRoutes);

module.exports = router;