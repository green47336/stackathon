import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import io from "socket.io-client";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {}

  render() {
    const socket = io.connect("https://socket-piano.herokuapp.com");

    //const hello = new Audio(document.getElementById("hello").src);
    const helloAudio = new Audio(`../audio/hello.mp3`)
    //hello.play();

    socket.on("connect", () => {
      console.log(`Connected with ID: ${socket.id}!`);
    });

    socket.on("playNote", note => {
      console.log('socket.on playNote fires')
      switch (note) {
        case 'hello':
          return helloAudio.play()
        default:
          return console.log('default case')
      }
    });

    socket.on("shout", () => {
      console.log("Hey, everyone!")
    })

    return (
      <div>
        <audio id='hello' src={`../audio/hello.mp3`}/>
        <h1
          onClick={() => {
            console.log('click')
            let note = "hello"
            socket.emit("playNote", note);
            socket.emit("shout")
          }}
        >
          b0oba
        </h1>
        <Switch>
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    // isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    dispatch: (action) => dispatch(action),
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
