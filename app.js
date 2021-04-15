require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const userSigninRoute = require("./routes/user-route");

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json({limit:'50mb'}));
app.use("/user",userSigninRoute);
app.use("/face-recog", require("./routes/image-route"));

app.use((err,req,res,next)=>{
    console.log(err.message);
    return res.status(err.status || 500).json({
        message: err.message,
        error: err
    });
});

module.exports = app;