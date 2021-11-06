import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import socket from "./whereWeAt";
import { localPlay } from "./localPlay";
import { Howl, Howler } from "howler";
import { keys, noteToKey, keyToNote } from "./keyConstants";
import * as Tone from "tone";
import { Piano } from "@tonejs/piano";
import { Synth } from "tone";

import { synth } from "./keyConstants";

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
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);
  }

  handleKeyDown = (ev) => {
    if (ev.repeat) {
      return;
    }
    const key = ev.key;
    this.setState(
      {
        ...this.state,
        pressedKeys: [...this.state.pressedKeys, ev.key],
      },
      () => {
        //localPlay(keyToNote[key]);
        socket.emit("playNote", keyToNote[key]);
      }
    );
  };

  handleKeyUp = (ev) => {
    const pressedKeys = this.state.pressedKeys;
    const filteredKeys = pressedKeys.filter((key) => key !== ev.key);
    this.setState({ ...this.state, pressedKeys: filteredKeys });
  };

  render() {
    // const helloAudio = new Audio(`../audio/hello.mp3`);
    // const c4Audio = new Howl({ src: [`../audio/c4.mp3`] });
    // const cSharp4Audio = new Audio(`../audio/cSharp4.mp3`);
    // const d4Audio = new Audio(`../audio/d4.mp3`);
    // const dSharp4Audio = new Audio(`../audio/dSharp4.mp3`);
    // const e4Audio = new Audio(`../audio/e4.mp3`);
    // const f4Audio = new Audio(`../audio/f4.mp3`);
    // const fSharp4Audio = new Audio(`../audio/fSharp4.mp3`);
    // const g4Audio = new Audio(`../audio/g4.mp3`);
    // const gSharp4Audio = new Audio(`../audio/gSharp4.mp3`);
    // const a4Audio = new Audio(`../audio/a4.mp3`);
    // const aSharp4Audio = new Audio(`../audio/aSharp4.mp3`);
    // const b4Audio = new Audio(`../audio/b4.mp3`);
    // const c5Audio = new Audio(`../audio/c5.mp3`);

    socket.on("playNote", (note) => {
      console.log("note", note);
      switch (note) {
        case "hello":
          return helloAudio.play();
        case "C-4":
          return synth.triggerAttackRelease("C4", "8n");
        //return c4Audio.play();
        case "Db/C#-4":
          return synth.triggerAttackRelease("C#4", "8n");
        //return cSharp4Audio.play();
        case "D-4":
          return synth.triggerAttackRelease("D4", "8n");
        //return d4Audio.play();
        case "Eb/D#-4":
          return synth.triggerAttackRelease("D#4", "8n");
        //return dSharp4Audio.play();
        case "E-4":
          return synth.triggerAttackRelease("E4", "8n");
        //return e4Audio.play();
        case "F-4":
          return synth.triggerAttackRelease("F4", "8n");
        //return f4Audio.play();
        case "Gb/F#-4":
          return synth.triggerAttackRelease("F#4", "8n");
        //return fSharp4Audio.play();
        case "G-4":
          return synth.triggerAttackRelease("G4", "8n");
        //return g4Audio.play();
        case "Ab/G#-4":
          return synth.triggerAttackRelease("G#4", "8n");
        //return gSharp4Audio.play();
        case "A-4":
          return synth.triggerAttackRelease("A4", "8n");
        //return a4Audio.play();
        case "Bb/A#-4":
          return synth.triggerAttackRelease("A#4", "8n");
        //return aSharp4Audio.play();
        case "B-4":
          return synth.triggerAttackRelease("B4", "8n");
        //return b4Audio.play();
        case "C-5":
          return synth.triggerAttackRelease("C5", "8n");
        //return c5Audio.play();
        default:
          return console.log("default case");
      }
    });

    socket.on("shout", () => {
      console.log("Hello, everyone!");
    });

    const handleClick = (ev) => {
      //localPlay(ev.target.id);
      socket.emit("playNote", ev.target.id);
    };

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {/* <button
          onClick={() => {
            synth.triggerAttackRelease("C4", "16n");
          }}
        >
          C4
        </button> */}
        <div style={{color: 'white'}}>{JSON.stringify(this.state.pressedKeys)}</div>

        <div
          id="piano2"
          style={{ display: "flex", flexDirection: "row", marginTop: "1rem" }}
        >
          {keys.map((key) => {
            return key.includes("#") ? (
              <div
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
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <p style={{margin: "5px", pointerEvents: 'none'}}>{key}</p> <p style={{margin: "5px", pointerEvents: 'none'}}>{`-${noteToKey[key]}-`}</p>
              </div>
            ) : (
              <div
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
                  flexDirection: 'column',
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <p style={{margin: "5px", pointerEvents: 'none'}}>{key}</p> <p style={{margin: "5px", pointerEvents: 'none'}}>{`-${noteToKey[key]}-`}</p>
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
  return {};
};

const mapDispatch = (dispatch) => {
  return {
    dispatch: (action) => dispatch(action),
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
