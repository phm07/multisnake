import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

const port = process.env.PORT ?? 6969;

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    console.log("a user connected");
});

server.listen(port, () => {
    console.log("listening on :" + port);
});
