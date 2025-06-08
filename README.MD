CLIENT ----> REQUEST ----> 
SERVER ----> RESPONSE --->


HTTP COnnection are two types 
   1 . persistent(after the communication the link is not break)
   2 . non persistent(once the tcp connection and response get the life cycle gets break)

   in http  request header the parameter you send called as keep alive
# keep alive
In an HTTPS connection, the **Keep-Alive** feature is used to reuse the same TCP connection for multiple HTTP(S) requests/responses instead of opening a new connection for each request.
{
   In an **HTTPS** connection, the `**Keep-Alive**` feature is used to **reuse the same TCP connection** for multiple HTTP(S) requests/responses instead of opening a new connection for each request.

---

### 🔒 **HTTPS + Keep-Alive = Secure & Efficient**

---

### ✅ What is **Keep-Alive**?
- It's an HTTP header:  
  ```
  Connection: keep-alive
  ```
- It **instructs the browser/server** to **keep the connection open** after a request/response, instead of closing it immediately.

---

### 🔧 **How it works with HTTPS:**
1. When an HTTPS connection is made:
   - A **TLS handshake** is done (which is expensive).
2. With `Keep-Alive`, the **same encrypted (TLS) connection** can be used for multiple HTTP requests.
3. This avoids doing another TLS handshake for every request.

---

### 🎯 **Benefits of Keep-Alive in HTTPS:**
| Benefit | Explanation |
|--------|-------------|
| 🔁 Reuse Connection | Reduces overhead of multiple TLS handshakes. |
| ⚡ Faster | Speeds up loading by reducing latency. |
| 📉 Lower Load | Reduces CPU usage on both client and server. |
| 📶 Efficient Use of Network | Fewer TCP connections means less congestion. |

---

### 🚫 What if Keep-Alive is **not** used?
- Each HTTP request opens a **new TCP connection**, performs a **new TLS handshake**, and then closes it.
- This is **slow** and **costly**, especially for secure HTTPS sites.

---

### 🛠 Example:
```http
GET / HTTP/1.1
Host: example.com
Connection: keep-alive
```

The server may respond with:
```http
HTTP/1.1 200 OK
Connection: keep-alive
Keep-Alive: timeout=5, max=100
```

This means:
- Keep the connection alive for 5 seconds,
- Or up to 100 requests.

---

Let me know if you want to see how browsers use Keep-Alive, or how to disable/enable it in server settings like Nginx or Apache.
}

keep alive general header allows the sender to hint about how the connection about , may be used to set a time out and a maximum amount of requests
////////////////////////////////////////////////////////////////////////////////////////////
read about it in MDN reference

# web sockets
WebSocket is a protocol that allows for two-way (full-duplex), persistent communication between client and server over a single TCP connection.

Unlike HTTP, which is request-response based, WebSocket allows real-time data flow both ways without repeatedly opening/closing connections.
WebSocket is a protocol that enables interactive communication between a client (like a web browser) and a server. It allows for full-duplex communication, meaning both parties can send and receive messages simultaneously over a single, long-lived connection.

web socket object provides the api for creating and managing a websocket connection to a server as well as for sending and receiving data on the connection

web socket --> it is an advance technology that makes it possibble to make a open two way possiblle interactive communication between the user and browser and a servere

with this api you can send a message to server and recieve an event-driven responses without having a poll to the server for a reply
`read from mdn `

act as a websocket pipeline
`socket.io` for nodejs a long polling / web socket based third party transfer protocol for node js

websockets are also based on tcp connecttion

`socket.io ` is a library that harness the websocket power
read `socket.io` from google 

`socket.io` provides automatic reconnection(example there is a cliet and a server. let for some reason internet gone  away from  client side  . but when internet comes back client will automatically reconnect to the  server )

   // io.emit('msg_rcvd' , data);//if i did io.emit then server give response to each client  
    // but when i do socket.emit then server give response to only that client who send the message
    // socket.emit('msg_rcvd', data); // Send message back to the same client
    // if you do socket.broadcast.emit() ==> then apart from current client you send the data to each client
    // socket.broadcast.emit('msg_rcvd' , data);

In above case we saw three types of socket connections
now look how ROom implement

# ROOM 

🏠 What is a "Room" in WebSockets (especially in Socket.IO)?
A Room is a virtual channel that lets you group clients (users/sockets) together.

It allows the server to send a message to a specific group of users, instead of everyone connected.

Rooms are managed only on the server-side — clients don’t know they’re in a room unless the server tells them.



 Room is an arbitary channel that sockets can join or leave , we can use it to send event to a subset of client who are the part of the room
 `socket.join('room id')`
 `io.to('room id').emit(' ')`

sockets does not store any data 
so we use a DataBase to store the data so that if user refresh the chat then data must be preserved





