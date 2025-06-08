document.addEventListener("DOMContentLoaded", () => {
console.log("Welcome to Socket.io");

const socket = io();

let input = document.getElementById("chat_box");
let msg_list  = document.getElementById("messageList");
let send = document.getElementById("send");

send.addEventListener("click", () => {
  let msg = input.value;
  // if (msg) {
    socket.emit("new_message", {
      message : msg,
    });
    // input.value = "";
  // }
  })



socket.on("msg_rcvd" ,(data) =>{
  let msg = document.createElement('li');
  msg.textContent = data.message;
  msg_list.appendChild(msg);

})
})















// let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   socket.emit("from_client");
// });

// socket.on("from_server", () => {
//   const div = document.getElementById("from_server");
//   const p = document.createElement("p");
//   p.textContent = "Hello everyone, I am Lucky!";
//   div.appendChild(p);
// });

