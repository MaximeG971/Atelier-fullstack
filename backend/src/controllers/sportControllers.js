// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all sports from the database
    const sports = await tables.sport.readAll();

    // Respond with the sports in JSON format
    res.json(sports);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific sport from the database based on the provided ID
    const sport = await tables.sport.read(req.params.id);

    // If the sport is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the sport in JSON format
    if (sport == null) {
      res.sendStatus(404);
    } else {
      res.json(sport);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const sport = req.body;

  try {
    // Insert the sport into the database
    const insertId = await tables.sport.create(sport);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted sport
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
