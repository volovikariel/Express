// Guestbook code
let path = require("path");
let http = require("http");
let express = require("express");
let morgan = require("morgan");

let app = express();

// Use logger 
app.use(morgan("short"));

// Only match users/number now
app.get(/^\/users\/(\d+)$/, (req, res) => {
    // Access the first group
    res.send(`ID: ${JSON.stringify(req.params)}`);
})

// Response 404 if unknown source 
app.use((req, res) => {
    res.status(404);
    res.send("User not found");
})

http.createServer(app).listen(3000);
