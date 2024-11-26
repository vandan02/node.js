const http = require("http");
const fs = require("fs");
let server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  if(res.url=="/"){
    fs.readFile("index.html", "utf-8", (err, data) => {    
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.end(data);
      }
  })
  }
   else if (req.url === "/login") {
   return res.end("Login successful");
  } 
  else if (req.url === "/signup") {
  return  res.end("Signup successful");
  } else if (req.url === "/contact") {
  return  res.end("Contact us");
  } else if (req.url === "/service") {
  return  res.end("How can I help you?");
  }
});
server.listen(8090, () => {
  console.log("Server started on port 8090 ok");
});
