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

app.get("/about", (req, res) => {
    res.end("Welcome to the about page!");
})

// Route which isn't entirely fixed! Keeps track of :who
app.get("/users/:who", (req, res) => {
    res.end(`Hello ${req.params.who}`);
})

// Redirects to a different website when you search it, either full URL or relative
app.get("/google", (req, res) => {
    res.redirect(`https://google.com`);
})

app.get("/redirect", (req, res) => {
    res.redirect(`/about`);
})

// If it's not any of the others, it'll be here
app.use((req, res) => {
    res.statusCode = 404;
    res.end(`404`);
})

http.createServer(app).listen(3000);
