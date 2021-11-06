import io from "socket.io-client";

const whereWeAt = location.origin.slice(7, 16);
console.log("Current location", whereWeAt);
const whereToConnect =
  whereWeAt === "localhost"
    ? "http://localhost:8080/"
    : "https://socket-piano.herokuapp.com";

const socket = io.connect(whereToConnect);


export default socket
