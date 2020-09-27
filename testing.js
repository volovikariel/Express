// In testing branch

// Allows us to use the parse function for URLs
let url = require("url");
let parsedUrl = url.parse("https://www.google.com/search?q=potato");

// Display all values
console.table(parsedUrl);

// Specific ones
console.log(`Query: ${parsedUrl.query}`);
