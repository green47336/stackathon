const { db } = require('./db')
const PORT = process.env.PORT || 8080
const app = require('./app')
const seed = require('../script/seed');
const {Server} = require('socket.io') //This might need the CORS treatment for deployment

const init = async () => {
  try {
    if(process.env.SEED === 'true'){
      await seed();
    }
    else {
      await db.sync()
    }
    //anything
    // start listening (and create a 'server' object representing our server)
    const server = app.listen(PORT, () => console.log(`Tuning the instruments on port ${PORT}`))


    const socketServer = new Server(server);


    socketServer.on('connection', (socket)=> {
      console.log("Connected", socket.id)
      //socket.emit('history', history);
      socket.on('playNote', (note)=> {
        console.log('emitting note')
        socketServer.emit('playNote', note);
        //socket.broadcast.emit
      });
      socket.on("shout", ()=>{
        socketServer.emit("shout")
      })
    });


    // // Old websocket stuff
    // let sockets = [];
    // const socketServer = new ws.Server({ server });
    // socketServer.on('connection', (socket)=> {
    //   sockets.push(socket);
    //   console.log(sockets.length);
    //   socket.on('message', (message)=> {
    //     sockets.filter(s => s !== socket).forEach( s => s.send(message.toString()));
    //   });
    //   socket.on('close', ()=> {
    //     sockets = sockets.filter(s => s !== socket);
    //   });
    // });

  } catch (ex) {
    console.log(ex)
  }
}

init()
