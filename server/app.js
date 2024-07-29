const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const m = (name, text, id) => ({name, text, id})

io.on('connection', socket => {
  socket.on('userJoined', (data, cb) => {
    if (!data.name || !data.room) {
      return cb('Данные некорректны')
    }

    socket.join(data.room)

    cb({userId: socket.id})
    socket.emit('newMessage', m('admin', `Добро пожаловать ${data.name}`))
    socket.broadcast
      .to(data.room)
      .emit('newMessage', m('admin', `Пользователь ${data.name} зашел`))
  })

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
