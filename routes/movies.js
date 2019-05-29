const express = require("express");
const router = express.Router();
const MovieController = require("../app/api/controllers/movies");

router.get("/", MovieController.getAll);
router.post("/", MovieController.create);
router.get("/", MovieController.getById);
router.put("/", MovieController.updateById);
router.delete("/", MovieController.deleteById);

module.exports = router;
