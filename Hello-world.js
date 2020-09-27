let express = require("express");

let app = express();

// Listens to request on (in this case) localhost:3000/ and returns Hello world HTML
app.get("/", (request, response) => {
    response.send("<h1>Hello world!</h1>");
});

// Defines the port
app.listen(3000, () => {
    console.log("Express started listening on port 3000");
});
