// Guestbook code
let path = require("path");
let http = require("http");
let express = require("express");
let logger = require("morgan");
// Allows for the parsing of Post requests
let bodyParser = require("body-parser");

let app = express();

// Set up views 
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// Make an array to store the guestbook entries
let entries = [];
app.locals.entries = entries;

// Use logger 
app.use(logger("dev"));

// Parse the body with bodyParser 
app.use(bodyParser.urlencoded({extended: false}));

// Render the different views on GET requests
app.get("/", (req, res) => {
    res.render("index");
})

app.get("/new-entry", (req, res) => {
    res.render("new-entry");
})

// Push to entries when receiving a POST request
app.post("/new-entry", (req, res) => {
    if(!req.body.title || !req.body.body) {
        res.status(400).end("Entried must have a title and a body!");
        return;
    }
    entries.push({
        title: req.body.title,
        content: req.body.body, 
        published: new Date()
    })
    res.redirect("/");
})

// Response 404 if unknown source 
app.use((req, res) => {
    res.status(404).render("404");
})


http.createServer(app).listen(3000);
