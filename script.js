// Guestbook code
let path = require("path");
let express = require("express");
let morgan = require("morgan");
// Routing middleware
let apiRouter = require("./routes/api_router");

let app = express();

// Use logger 
app.use(morgan("short"));

// Only match users/number now
let filePath = path.join(__dirname, "static");
app.use("/static", express.static(filePath));

// Uses the apiRouter
app.use("/api", apiRouter);

app.listen(3000);
