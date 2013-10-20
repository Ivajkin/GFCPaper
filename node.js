console.log('Init...');

var net = require('net');

var server = net.createServer(function (socket) {
  console.log('server connected');
  socket.on('end', function() {
    console.log('server disconnected');
  });
  socket.write('Echo server\r\n');
  socket.pipe(socket);
});

server.listen(8124, function() {
  console.log('server bound');
});

// у каждого нода - список тех, кто в сети. Когда запускаем async - передаём задачу на соседние наименее нагруженные и себе задачу оставляем тоже. Ожидаем результата в каллбеке.
