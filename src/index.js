import express from "express";
import { createServer } from "node:http";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Server as WebSocketServer } from "socket.io";
import { v4 as uuidv4 } from "uuid";

const notes = [];

// express nos devuelve un objeto aplication no un objeto http, y websocket necesita el modulo http
const app = express();
// se configura un servidor que utiliza la configuracion de express
const server = createServer(app);
const PORT = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const io = new WebSocketServer(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "/public")));

io.on("connection", (socketServer) => {
  console.log(`New client connected ${socketServer.id}`);

  socketServer.on("newnote", (newNote) => {
    const note = { id: uuidv4(), ...newNote };
    console.log(note);
    notes.push(note);

    socketServer.emit("newnote", note);
  });

  // socket.emit("ping", "estoy conectado");

  // socket.on("pong", (data) => {
  //   console.log(data);
  // });
});

server.listen(PORT, () => {
  console.log(`listening on port: http://localhost:${PORT}`);
});
