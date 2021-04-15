const { validateLogin, validateRegister } = require("../db/db-validate");
const validateImage = require("../utils/image-validation");

const validateUserOnRegister = (req,res,next) => {
    const { error } = validateRegister(req.body);
        if (error) return res.status(400).json({message:error.details[0].message});
        return next();
}

const validateUserOnLogin = (req,res,next) => {
    const { error } = validateLogin(req.body);
        if (error) return res.status(400).json({message:error.details[0].message});
        return next();
}

const validateImageOnReceive = (req,res,next) => {
    const { error } = validateImage({image: req.body.image});
    if (error) return res.status(400).json({message:error.details[0].message});
        return next();
}

module.exports = { validateUserOnLogin, validateUserOnRegister, validateImageOnReceive }