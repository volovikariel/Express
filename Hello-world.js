// Hello world express branch
let express = require("express");
let logger = require("morgan");
let path = require("path");
let http = require("http");

// Express returns a request handler function
let app = express();

// Logging middleware with Morgan
app.use(logger("short"));


let publicPath = path.resolve(__dirname, "public");
// Sends static files in the public path
app.use(express.static(publicPath));

// If it doesn't find any static files it comes here
app.use((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(`No static files D":`);
})

http.createServer(app).listen(3000);
