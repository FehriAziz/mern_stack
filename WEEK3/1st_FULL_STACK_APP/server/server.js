const express = require ("express")

const bodyParser = require('body-parser');
const cors=require ('cors')

const app = express ();
// GLOBAL VARIABLES
const PORT = 8000
const DB = "fullstack_db"


app.use(express.json())  ;
// app.use( express.urlencoded({extend:true}));
app.use(bodyParser.urlencoded({ extended: true }) , cors());

require ('./config/mongoose.config')(DB)
require ('./routes/person.routes')(app)



app.listen(PORT , ()=>console.log(`🔥🔥🔥 >>>>> server is running on port ${PORT}<<<<<<🔥🔥🔥`) );