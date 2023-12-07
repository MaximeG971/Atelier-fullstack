// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all teams from the database
    const teams = await tables.team.readAll();

    // Respond with the teams in JSON format
    res.json(teams);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific team from the database based on the provided ID
    const team = await tables.team.read(req.params.id);

    // If the team is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the team in JSON format
    if (team == null) {
      res.sendStatus(404);
    } else {
      res.json(team);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  try {
    await tables.team.update(req.params.id, req.body);
    res.sendStatus(201);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const team = req.body;

  try {
    // Insert the team into the database
    const insertId = await tables.team.create(team);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted team
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation

const destroy = async (req, res, next) => {
  try {
    // Fetch a specific team from the database based on the provided ID
    const team = await tables.team.delete(req.params.id);

    // If the team is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the team in JSON format
    if (team == null) {
      res.sendStatus(404);
    } else {
      res.json(team);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
