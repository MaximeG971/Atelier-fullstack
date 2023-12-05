const express = require("express");

const router = express.Router();
// const client = require("../database/client");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Route to get a list of teams

const teamController = require("./controllers/teamControllers");
const sportController = require("./controllers/sportControllers");

router.get("/teams", teamController.browse);
router.get("/teams/:id", teamController.read);
router.post("/teams", teamController.add);
router.get("/sports", sportController.browse);
router.delete("/teams/:id", teamController.destroy);

// Route to get a specific item by ID

// router.get("/items/:id", itemControllers.read);

// Route to add a new item
// router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
