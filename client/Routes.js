import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import socket from "./whereWeAt";
import { localPlay } from "./localPlay";
import { Howl, Howler } from "howler";
import {keys, noteToKey, keyToNote} from "./keyConstants"

/**
 * COMPONENT
 */
class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressedKeys: [],
    };
  }

  componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown);
      window.addEventListener('keyup', this.handleKeyUp);
      console.log(JSON.stringify(keyToNote))
  }

  handleKeyDown = (ev) => {
    console.log("handleKeyDown", ev.target.id);
    if (ev.repeat) {
      return;
    }
    const key = ev.key;
    this.setState({
      ...this.state,
      pressedKeys: [...this.state.pressedKeys, ev.key],
    }, () => {
      console.log(JSON.stringify(this.state))
      localPlay(keyToNote[key]);
      socket.emit("playNote", keyToNote[key]);
    });
    console.log(JSON.stringify(this.state));
  };

  handleKeyUp = (ev) => {
    const pressedKeys = this.state.pressedKeys
    console.log("handleKeyUp", ev.key);
    const filteredKeys = pressedKeys.filter((key) =>
      key !== ev.key)
    this.setState({ ...this.state, pressedKeys: filteredKeys }, () => {console.log(JSON.stringify(this.state))});
    ;
  };

  render() {
    // const whereWeAt = location.origin.slice(7, 16);
    // console.log("Current location", whereWeAt);
    // const whereToConnect =
    //   whereWeAt === "localhost"
    //     ? "http://localhost:8080/"
    //     : "https://socket-piano.herokuapp.com";
    // export const socket = io.connect(whereToConnect);
    
    // socket.on("connect", () => {
    //   console.log(`Connected with ID: ${socket.id}!`);
    // });

    const helloAudio = new Audio(`../audio/hello.mp3`);
    const c4Audio = new Howl({ src: [`../audio/c4.mp3`], html5: true });
    const cSharp4Audio = new Audio(`../audio/cSharp4.mp3`);
    cSharp4Audio.playbackRate = 5;
    const d4Audio = new Audio(`../audio/d4.mp3`);
    const dSharp4Audio = new Audio(`../audio/dSharp4.mp3`);
    const e4Audio = new Audio(`../audio/e4.mp3`);
    const f4Audio = new Audio(`../audio/f4.mp3`);
    const fSharp4Audio = new Audio(`../audio/fSharp4.mp3`);
    const g4Audio = new Audio(`../audio/g4.mp3`);
    const gSharp4Audio = new Audio(`../audio/gSharp4.mp3`);
    const a4Audio = new Audio(`../audio/a4.mp3`);
    const aSharp4Audio = new Audio(`../audio/aSharp4.mp3`);
    const b4Audio = new Audio(`../audio/b4.mp3`);
    const c5Audio = new Audio(`../audio/c5.mp3`);


    const keys = [
      "C-4",
      "Db/C#-4",
      "D-4",
      "Eb/D#-4",
      "E-4",
      "F-4",
      "Gb/F#-4",
      "G-4",
      "Ab/G#-4",
      "A-4",
      "Bb/A#-4",
      "B-4",
      "C-5",
    ];

    // const noteToKey = {
    //   "C-4": "s",
    //   "Db/C#-4": "e",
    //   "D-4": "d",
    //   "Eb/D#-4": "r",
    //   "E-4": "f",
    //   "F-4": "g",
    //   "Gb/F#-4": "y",
    //   "G-4": "h",
    //   "Ab/G#-4": "u",
    //   "A-4": "j",
    //   "Bb/A#-4": "i",
    //   "B-4": "k",
    //   "C-5": "l",
    // };



    socket.on("playNote", (note) => {
      console.log("note", note);
      switch (note) {
        case "hello":
          return helloAudio.play();
        case "C-4":
          return c4Audio.play();
        case "Db/C#-4":
          return cSharp4Audio.play();
        case "D-4":
          return d4Audio.play();
        case "Eb/D#-4":
          return dSharp4Audio.play();
        case "E-4":
          return e4Audio.play();
        case "F-4":
          return f4Audio.play();
        case "Gb/F#-4":
          return fSharp4Audio.play();
        case "G-4":
          return g4Audio.play();
        case "Ab/G#-4":
          return gSharp4Audio.play();
        case "A-4":
          return a4Audio.play();
        case "Bb/A#-4":
          return aSharp4Audio.play();
        case "B-4":
          return b4Audio.play();
        case "C-5":
          return c5Audio.play();
        default:
          return console.log("default case");
      }
    });

    socket.on("shout", () => {
      console.log("Hello, everyone!");
    });

    const handleClick = (ev) => {
      localPlay(ev.target.id);
      socket.emit("playNote", ev.target.id);
    }

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {/* <audio id="hello" src={`../audio/hello.mp3`} /> */}
        {/* <h3
          onClick={() => {
            console.log("click");
            let note = "hello";
            socket.emit("playNote", note);
            socket.emit("shout");
          }}
        >
          Hello
        </h3> */}
        {/* <div id="piano">
          {keys.map((key) => {
            return (
              <button id={key} key={key} onClick={handleClick}>
                {key}
              </button>
            );
          })}
        </div> */}
        <div
          id="piano2"
          style={{ display: "flex", flexDirection: "row", marginTop: "1rem" }}
        >
          {keys.map((key) => {
            return key.includes("#") ? (
              <div
                onKeyDown={this.handleKeyDown}
                onKeyUp={this.handleKeyUp}
                onClick={handleClick}
                id={key}
                key={key}
                style={{
                  border: "1px solid gray",
                  marginRight: "-31px",
                  marginLeft: "-31px",
                  color: "white",
                  background: "black",
                  height: "300px",
                  width: "60px",
                  zIndex: "2",
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                {key}
              </div>
            ) : (
              <div
                onKeyDown={this.handleKeyDown}
                onKeyUp={this.handleKeyUp}
                onClick={handleClick}
                id={key}
                key={key}
                style={{
                  border: "1px solid gray",
                  color: "black",
                  background: "ivory",
                  height: "500px",
                  width: "100px",
                  position: "relative",
                  marginLeft: "0px",
                  marginRight: "0px",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                {key}
              </div>
            );
          })}
        </div>
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
