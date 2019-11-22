const router = require("express").Router();
const bloodRoutes = require("./bloods");

// Bloods routes
router.use("/bloods", bloodRoutes);

module.exports = router;
