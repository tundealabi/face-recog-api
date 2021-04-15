const Joi = require("joi");

function validateRegister(user) {
    const schema = Joi.object({
      username: Joi.string().min(3).max(15).regex(/^[a-zA-Z]+$/).required(),
      email: Joi.string().required().email().min(10).max(255),
      password: Joi.string().min(5).max(1024).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/).required()
    });
  
    return schema.validate(user);
  }

function validateLogin(user) {
    const schema = Joi.object({
        email: Joi.string().required().email().min(10).max(255),
        password: Joi.string().min(5).max(1024).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/).required()
    })
    return schema.validate(user);
}

module.exports = { validateLogin, validateRegister }