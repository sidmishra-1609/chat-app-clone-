// express js gives us logic for writing for backend server

// if you want to use express code on your project
// you have to import it in your project
// because we don't get this out of box

// git init

// the store is closed
// the store is not having milk
/////////////////////////////////////////////////////////////////////////////////////////////




// require is a way of importing
const express = require("express"); // I am getting this express from node_modules
// express is a function that returns a server
const http = require("http"); // i am getting from node js
const socketIo = require("socket.io"); // this gives me an object that has Server class
const SocketServer = socketIo.Server; // we are saving that server class in my socketServer
// this socketServer class will create my IO
const PORT = 5500;

const expressServer = express(); //this app is express server
// I need to modify my expressServer to httpServer
const httpServer = http.createServer(expressServer);

// step to modify my expressServer to http server

const io = new SocketServer(httpServer); // this class requires a server to create an io that
// is associated with io, this accepts only http server

// i have my server in expressServer variable

// expressServer.method(route, request,response callback)

// // empty route means base url that is http://localhost:3000/
// expressServer.get("/", (req, res) => {
//   res.send("hello world");
// });

// expressServer.get("/accio", (req, res) => {
//   res.send("some random text");
// });

// http://localhost:3000/

io.on("connection", (socket) => {
  console.log(socket);
  // socket (we get this socket everytime a brower connects)
  // when browser connects to our server it's performing 'connnection' event
});
// element.addEventListener('type of event',callbackFn);

httpServer.listen(PORT, () => {
  console.log(`app is up and running on http://localhost:${PORT}/`);
});


let a = 10;
console.log(a);

