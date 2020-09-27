// Hello world express branch
let express = require("express");
let http = require("http");

// Express returns a request handler function
let app = express();

// Passive middleware (it does not return or modify anything)
app.use((req, res, next) => {
    console.log(`${req.method} received when going to ${req.url}`);
    next(); 
})

app.use((req, res) => {
    res.writeHead(200, {"Content-type": "text/plain"});
    res.end(`Thanks for visiting ${req.url}`);
})

http.createServer(app).listen(3000);
