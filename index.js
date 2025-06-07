const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// Serve static files from the 'public' folder
app.use("/", express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("Connected to server", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });

  socket.on("from_client", () => {
    console.log("Received from client");
  });

  // Send message every 3 seconds
  setInterval(() => {
    socket.emit("from_server");
  }, 3000);
});

server.listen(3000, () => {
  console.log("Server is listening now on http://localhost:3000");
});
