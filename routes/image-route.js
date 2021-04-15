const router = require("express").Router();
const { validateImageOnReceive } = require("../middleware/validate");
const faceRecognition = require("../utils/face-recognition");


router
    .route('/image')
        .post( validateImageOnReceive, async (req,res,next) => {
            try {
				console.log(req.body)
                const { image, email } = req.body;
                const faceRecognitionRes = await faceRecognition(image);
                    await db('accounts').where({email}).increment('entries',1);
                  res.json(faceRecognitionRes);        
            } catch (error) {
                console.log(error);
                res.json({message: "Something went wrong. Try again"});
            }
        })

module.exports = router;