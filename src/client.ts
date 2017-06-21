{

    const ws = require("nodejs-websocket");
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const defaultPort = 28475;

    const conn = ws.connect("ws://45.32.186.169:"+defaultPort);

    conn.on("connect", () => {
        console.log("connected");
        conn.send("test message");
    });
    conn.on("close", (code,reason) => {
        console.log("closed");
    });
    conn.on("text", (text) => {
        console.log("received:"+text+"\n");
    });

    askForMsg();


function askForMsg() {
    rl.question('', (answer) => {

        conn.send(answer);

        //rl.close();
        askForMsg();
    });

}

}
