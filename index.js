const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const Chat = require('./models/chat');
const Group  = require('./models/group');
const connection = require("./config/db-config");


const io = new Server(server);

app.set('view engine' , 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



io.on("connection", (socket) => {
  console.log("Connected to server", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });

  socket.on('join_room' , (data) => {
     console.log("Joining a rooom " , data.roomid);
     socket.join(data.roomid);   
  })

  socket.on("new_message", async(data) => {
    const chat = Chat.create({
      roomid : data.roomid,
      sender : data.sender,
      content : data.message,
    })
    io.to(data.roomid).emit('msg_rcvd' , data);
  });
});



// req send
// http://localhost:3000/chat/6845c1394601d8ebb1e19f7e/lucky
app.get('/chat/:roomid/:user', async (req, res) => {
  console.log(req.params.roomid);
  const chats = await Chat.find({
     roomid :req.params.roomid
  });
  console.log(chats);
  const group = await Group.findById(req.params.roomid);
  console.log(group);

  if (!group) {
    return res.status(404).send('Group not found');
  }

  res.render('index', {
    roomid: req.params.roomid,
    user: req.params.user,
    groupname: group.name,
    prevmsgs : chats,
  });
});












//req send
//http://localhost:3000/group
app.get('/group' , async(req, res) => {
  res.render('group');
})

app.post('/group' , async(req, res) => {
  console.log(req.body);
   await Group.create({
     name : req.body.name
   });
   res.redirect('/group');
})

server.listen(3000, async () => {
  console.log("Server is listening now on http://localhost:3000");
  await connection();
  console.log("DB is COnnected");
});
