// const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
cors = require('cors');
bodyParser = require('body-parser');
dbConfig = require('./src/Data-Base/db');


// connet monggos
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db,{
    useUnifiedTopology: true, useNewUrlParser: true
}).then(()=>{
    console.log("Database Connected")
},
    error => {
        console.log("Database not connected: " + error)
    }
)

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

// Error
app.use((req, res, next)=>{
    // Error goes via next() method
    setImmediate(()=>{
        next(new Error("something went wrong"));
    });
});

app.use(function(err, req, res, next){
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});