const port = process.env.PORT || 8080;
const io = require("socket.io")(port);

console.log("Start server at port " + port);

io.on("connect", (socket) => {
  // socket.broadcast.emit("message", "New user join your party");
  socket.on("message", (data) => {
    let broadcast = {
      name: data.name,
      message: data.message,
    };
    socket.emit("message", broadcast);
    socket.broadcast.emit("message", broadcast);
  });
});
