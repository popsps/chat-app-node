const express = require('express')
const path = require('path')
const ws = require('ws')

const app = express()
const port = process.env.PORT || 8085
app.use(express.static(path.join(__dirname, 'frontend', 'build')))

const server = app.listen(port, () => console.log(`Server started on port ${port}`))

const wss = new ws.Server({server: server})
const messages = []
wss.on("connection", (socket, request) => {
  socket.on("message", message => {
    console.log(message)
    messages.push(message)

    wss.clients.forEach(client => {
      if (client !== socket)
        client.send(message)
    })
  })
  socket.on("close", () => console.log("Socket disconnected"))
  console.log("new Socket connected")
  socket.send(JSON.stringify({message: "welcome to cyber chat", username: "server"}))
  socket.send(JSON.stringify({message: "To start open up this chat-app in another tab and put in your username for each user, then write your message.", username: "server"}))
  if (messages.length > 0) {
    socket.send(JSON.stringify({message: "Chat currently in session", username: "server"}))
    messages.forEach(message => socket.send(message))
  }
})
console.log(`Chat server waiting for connection on port ${port}`)



