// Import access to database tables
const argon2 = require("argon2");
const tables = require("../tables");
const schema = require("../middlewares/authSignup");

// The B of BREAD - Browse (Read All) operation
// const browse = async (req, res, next) => {
//   try {
// Fetch all signups from the database
// const signups = await tables.signup.readAll();

// Respond with the signups in JSON format
//   res.json(signups);
// } catch (err) {
// Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The R of BREAD - Read operation
// const read = async (req, res, next) => {
//   try {
// Fetch a specific signup from the database based on the provided ID
// const signup = await tables.signup.read(req.params.id);

// If the signup is not found, respond with HTTP 404 (Not Found)
// Otherwise, respond with the signup in JSON format
//   if (signup == null) {
//     res.sendStatus(404);
//   } else {
//     res.json(signup);
//   }
// } catch (err) {
// Pass any errors to the error-handling middleware
// next(err);
//   }
// };

// The E of BREAD - Edit (Update) operation
// const edit = async (req, res, next) => {
//   try {
//     await tables.signup.update(req.params.id, req.body);
//     res.sendStatus(203);
//   } catch (err) {
// Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  if (schema.validate(req.body)) {
    const { email, password } = req.body;
    // Extract the item data from the request body
    try {
      const hashedPassword = await argon2.hash(password);

      const signup = {
        email,
        password: hashedPassword,
      };

      // Insert the signup into the database
      const insertId = await tables.signup.create(signup);

      // Respond with HTTP 201 (Created) and the ID of the newly inserted signup
      res.status(201).json({ insertId });
    } catch (err) {
      // Pass any errors to the error-handling middleware
      next(err);
    }
  }
};

// The D of BREAD - Destroy (Delete) operation

// const destroy = async (req, res, next) => {
//   try {
// Fetch a specific signup from the database based on the provided ID
// const signup = await tables.signup.delete(req.params.id);

// If the signup is not found, respond with HTTP 404 (Not Found)
// Otherwise, respond with the signup in JSON format
//   if (signup == null) {
//     res.sendStatus(404);
//   } else {
//     res.json(signup);
//   }
// } catch (err) {
// Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// Ready to export the controller functions
module.exports = {
  // browse,
  // read,
  // edit,
  add,
  // destroy,
};
