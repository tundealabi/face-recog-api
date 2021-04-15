const bcrypt = require("bcrypt");
const db = require("../db");
const { validateUserOnLogin, validateUserOnRegister } = require("../middleware/validate");

const router = require("express").Router();

router
    .route('/login')
        .post( validateUserOnLogin, async (req,res,next) => {
            try {
                const { email, password } = req.body;
                const result  = await db('login').where({email})
                if(result.length){
                    const comparePassword = await bcrypt.compare(password,result[0].hash);
                    if(comparePassword){
                        const user = await db('accounts').where({email});
                        return res.status(200).json(user[0]);
                    }
                    return res.json({message:"Wrong email or password"});
                }
                return res.json({message:"Wrong email or password"});
                
            } catch (error) {
                next(error)
            }
        })
router
    .route('/register')
        .post( validateUserOnRegister, async (req,res,next) => {
            try {
                const { email, username, password } = req.body;
                await db.transaction(async trx => {
                    const saveUserToAccount = await trx('accounts').insert({
                        username,
                        email,
                        created_on: new Date()
                    },"*");
                    const hashPassword = await bcrypt.hash(password,7);
                    const saveUserToLogin = await trx('login').insert({
                        hash: hashPassword,
                        email
                    },"*");
                    res.json(saveUserToAccount[0]);
                });
            } catch (error) {
				if(error.routine == "_bt_check_unique") return res.json({message:"Email is already taken"});
                next(error);
            }
        })


module.exports = router;