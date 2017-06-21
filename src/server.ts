// {
//     const SocketIOServer = require("socket.io");
//
//
//     const defaultPort = 28475;
//
//     const io = new SocketIOServer();
//
//     io.on("connection", function (socket) {
//         socket.on("entbox", (msg) => {
//             socket.broadcast.emit("entbox", msg);
//         });
//     });
//
//     io.listen(defaultPort);
//
// }

var ws = require("nodejs-websocket");

const defaultPort = 28475;

const server = ws.createServer(function (conn) {
    console.log("New connection");
    conn.on("text", function (str) {
        console.log("Received "+str);
        broadcast(server, str);
    });
    conn.on("close", function (code, reason) {
        console.log("Connection closed. code: "+code+" reason:"+reason);
    });
});
server.on("listening",function() {
    console.log("listening on port "+defaultPort);
});

server.listen(defaultPort);



function broadcast(server, msg) {
    server.connections.forEach(function (conn) {
        conn.sendText(msg)
    })
}

console.log("init done.")