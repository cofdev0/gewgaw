{

    const ws = require("nodejs-websocket");

    const defaultPort = 28475;

    const conn = ws.connect("ws://45.32.186.169:"+defaultPort);

    conn.on("connect", () => {
        console.log("connected");
        conn.send("testmessage");
    });
    conn.on("close", (code,reason) => {
        console.log("closed");
    });
    conn.on("text", (text) => {
        console.log("msg:"+text);
    });


    // const IO = require("socket.io");
    //
    // const defaultPort = 28475;
    //
    // const socket = IO("127.0.0.1:"+defaultPort);
    //
    // socket.on("connect", function () {
    //     socket.emit("entbox", "test");
    //     });


}