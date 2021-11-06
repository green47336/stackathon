import React, { Component } from "react";
//import { render } from '../server/app'

import Navbar from "./components/Navbar";
import Routes from "./Routes";
import socket from "./whereWeAt";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    socket.on("connect", () => {
      console.log(`Connected with ID: ${socket.id}!`);
    });
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    );
  }
}

export default App;
