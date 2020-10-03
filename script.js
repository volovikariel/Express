// Guestbook code
let path = require("path");
let http = require("http");
let express = require("express");
let morgan = require("morgan");

let app = express();

// Use logger 
app.use(morgan("short"));

// Use expresses' static instead
let staticFiles = path.join(__dirname, "static");
app.use(express.static(staticFiles));

// Response 404 if unknown source 
app.use((req, res) => {
    res.status(404);
    res.send("File not found!");
})


http.createServer(app).listen(3000);
