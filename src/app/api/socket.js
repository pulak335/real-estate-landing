import { Server } from 'socket.io';

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running');
  } else {
    console.log('Socket is initializing');
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', socket => {
      console.log('a user connected');

      socket.on('disconnect', () => {
        console.log('user disconnected');
      });

      socket.on('sendMessage', msg => {
        io.emit('receiveMessage', msg);
      });
    });
  }
  res.end();
};

export default SocketHandler;