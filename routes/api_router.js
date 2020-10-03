let express = require("express");

let api = express.Router();

let ALLOWED_IP = [
    "::1"
]

api.use((req, res, next) => {
    // True if ip is part of ALLOWED_IP
    let isUserAllowed = ALLOWED_IP.indexOf(req.ip) != -1; 
    if(!isUserAllowed) {
        res.status(404).send("Not authorized dood");
    }
    else {
        next();
    }
})

api.get("/users", (req, res, next) => {
    console.log("In users");
})
api.get("/user", (req, res, next) => {
    console.log("In user");
})

module.exports = api;
