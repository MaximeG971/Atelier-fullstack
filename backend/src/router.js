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
  if (req.query.name) {
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

// Route to get a specific item by ID

router.get("/teams/:id", (req, res) => {
  const id = +req.params.id;

  client
    .query("select * from team where id = ?", [id])
    .then(([team]) => {
      if (team[0] != null) {
        res.status(200).json(team[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});
// router.get("/items/:id", itemControllers.read);

// Route to add a new item
// router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
