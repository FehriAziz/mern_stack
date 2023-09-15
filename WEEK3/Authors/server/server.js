const express = require("express");
const cors = require('cors')
const app = express();

// GLOBAL VARIABLES
const PORT = 8000;
const DB = "authorApp_db";


app.use(express.json(), express.urlencoded({ extended: true }), cors());
require('./config/mongoose.config')(DB)
require('./routes/authors.routes')(app)


app.listen(PORT, () => console.log(`🚀🚀🚀🚀 >>> SERVER IS RUNNING ON PORT ${PORT} <<< 🚀🚀🚀`))