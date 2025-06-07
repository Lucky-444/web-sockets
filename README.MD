CLIENT ----> REQUEST ----> 
SERVER ----> RESPONSE --->


HTTP COnnection are two types 
   1 . persistent(after the communication the link is not break)
   2 . non persistent(once the tcp connection and response get the life cycle gets break)

   in http  request header the parameter you send called as keep alive
# keep alive
keep alive general header allows the sender to hint about how the connection about may be used to set a time out and a maximum amount of requests
////////////////////////////////////////////////////////////////////////////////////////////
read about it in MDN reference

# web sockets
web socket object provides the api for creating and managing a websocket connection to a server as well as for sending and receiving data on the connection

web socket --> it is an advance technology that makes it possibble to make a open two way possiblle interactive communication between the user and broeser and a servere

with this api you can send a message to server and recieve an event-driven responses without having a poll to the server for a reply
`read from mdn `

act as a websocket pipeline
`socket.io` for nodejs a long polling / web socket based third party transfer protocol for node js

websockets are also based on tcp connecttion

`socket.io ` is a library that harness the websocket power
read `socket.io` from google 

`socket.io` provides automatic reconnection(example there is a cliet and a server. let for some reason internet gone  away from  client side  . but when internet comes back client will automatically reconnect to the  server )



