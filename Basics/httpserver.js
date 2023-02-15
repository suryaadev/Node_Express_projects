const http = require("http");
require("dotenv").config();

const port = 5000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Typr", "text/html");
  if (req.url == "/") {
    res.end("<h1>This is HTTP server response</h1>");
  }
  else if (req.url == "/about") {
    res.end("<h1>This is about page</h1>");
    res.end("<p>{req}</p>");
  }
});

server.listen(port, () => console.log(`Server is running on port ::: ${port}`));
