const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string()
    .required()
    .pattern(/^[a-zA-Z0-9]{3,30}$/),
});

const authSignup = (req, res, next) => {
  delete req.body.id;
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(422).json(error);
  } else {
    next();
  }
};

module.exports = authSignup;
