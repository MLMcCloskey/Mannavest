const router = require("express").Router();
const cardRoutes = require("./cardRoutes");

// Book routes
router.use("/cardRoutes", cardRoutes);

module.exports = router;