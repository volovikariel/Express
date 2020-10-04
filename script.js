// JSON_API Branch
let express = require("express");

let app = express();

// Can test these with CURL -X Delete/Post/Put, default is get request
app.get("/", (req, res) => {
    res.send("Getteeeeed!");
});

app.post("/", (req, res) => {
    res.send("posted");
});

app.put("/", (req, res) => {
    res.send("Put");
});

app.delete("/", (req, res) => {
    res.send("Deleted");
});

app.listen(3000, () => {
    console.log("Started listening on 3000");
});
