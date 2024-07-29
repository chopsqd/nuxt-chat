const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

io.on('connection', socket => {
  socket.on('createMessage', data => {
    socket.emit('newMessage', {
      text: 'TEST'
    })
  })
})

module.exports = {
  app,
  server
}
