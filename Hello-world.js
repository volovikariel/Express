// Hello world express branch
let express = require("express");
let logger = require("morgan");
let path = require("path");
let http = require("http");

// Express returns a request handler function
let app = express();

// Logging middleware with Morgan
app.use(logger("short"));

// Static middleware
let publicPath = path.resolve(__dirname, "public");
// Sends static files in the public path
app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.end("Welcome to the homepage!");
})

// Send files!
app.get("/about", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/wallpaper.jpg"));
})

// If it's not any of the others, it'll be here
app.use((req, res) => {
    res.statusCode = 404;
    res.end(`404`);
})

http.createServer(app).listen(3000);
