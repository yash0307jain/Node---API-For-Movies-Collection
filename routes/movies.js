const express = require("express");
const router = express.Router();
const MovieController = require("../app/api/controllers/movies");

router.get("/", MovieController.getAll);
router.post("/", MovieController.create);
router.get("/:movieId", MovieController.getById);
router.put("/:movieId", MovieController.updateById);
router.delete("/:movieId", MovieController.deleteById);

module.exports = router;
