// In testing branch

// Allows us to use http.createServer() 
let http = require("http");

function requestHandler(request, response) {
    console.log(`Request url: ${request.url}`); // Url in the shape of /, /home, etc. 
    response.end(`End of response.`);
}

let server = http.createServer(requestHandler);

server.listen(3000);
