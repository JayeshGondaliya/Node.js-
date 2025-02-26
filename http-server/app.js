const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>this is home's</h1>");
    res.end();
  }
  if (req.url === "/contact") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>this is contact page.............................</h1>");
    res.end();
  }
  if (req.url === "/source-code") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>source code</h1>");
    res.end();
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
