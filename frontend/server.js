// const bodyParser = require('body-parser');
const express = require('express');
cors = require('cors');
bodyParser = require('body-parser');



// setup express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use(express.static(__dirname));

const port = process.env.PORT || 4001;
const server = app.listen(port,()=>{
    console.log("Connected to port "+ port)
})
