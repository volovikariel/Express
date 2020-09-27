// Hello world express branch
let express = require("express");
let logger = require("morgan");
let http = require("http");

// Express returns a request handler function
let app = express();

// Logging middleware with Morgan
app.use(logger("short"));

// Authentication middleware
app.use((req, res, next) => {
    
    let minutes = (new Date()).getMinutes();
    if(minutes % 2 == 0) {
        next();
    }
    else {
        res.statusCode = 403;
        res.end("Not authorized!");
    }
})

// Response 
app.use((req, res) => {
    res.end(`Secret password is Potato`);
})

http.createServer(app).listen(3000);
