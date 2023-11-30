const express = require("express");

const router = express.Router();
const client = require("../database/client");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Route to get a list of teams

router.get("/teams", (req, res) => {
  let url = "SELECT * FROM team";
  const values = [];
  if (req.query.race) {
    url += " WHERE name = ?";
    values.push(req.query.name);
  }
  if (req.query.limit) {
    url += " LIMIT ?";
    values.push(+req.query.limit);
  }

  client
    .query(url, values)
    .then((result) => res.status(200).json(result[0]))
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
