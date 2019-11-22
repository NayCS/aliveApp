const router = require("express").Router();
const bloodController = require("../../controllers/bloodController");

//Matches with "/api/blood"
router.route("/")
    .get(bloodController.findAll)
    .post(bloodController.create);

//Matches with "/api/blood/:id"
router
    .route("/:id")
    .get(bloodController.findById)
    .put(bloodController.update)
    .delete(bloodController.remove);

module.exports = router;

