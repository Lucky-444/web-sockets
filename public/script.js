console.log("Welcome to Socket.io");

const socket = io();

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  socket.emit("from_client");
});

socket.on("from_server", () => {
  const div = document.getElementById("from_server");
  const p = document.createElement("p");
  p.textContent = "Hello everyone, I am Lucky!";
  div.appendChild(p);
});
