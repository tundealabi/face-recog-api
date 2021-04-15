const Joi = require("joi");

function validateImage(image) {
    const schema = Joi.object({
      image: Joi.string().min(5).required()
    });
  
    return schema.validate(image);
  }

  module.exports = validateImage;