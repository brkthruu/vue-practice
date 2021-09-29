const express = require("express");
const app = express();
const port = 4000;

    
const server = app.listen(`${port}`, function() {
  console.log(`Server started on port ${port}`);
});

const io = require("socket.io")(server, { cors: { origin: "*" } });

function getRandomValue(){
    return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
}
io.on("connection", socket => {
    setInterval(() => {
        socket.broadcast.emit("newdata", getRandomValue())
    }, 3000)    // every 3sec
});