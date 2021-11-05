import React from "react";
import { connect } from "react-redux";
//import { mapFinderOptions } from "sequelize/types/lib/utils";
import { playAudio } from "../store/";

/**
 * COMPONENT
 */
export const Home = (props) => {

  const {playAudio} = props

  const handleClick = () => {

  }

  //const hello = new Audio(document.getElementById('hello').src)

  return (
    <div>
      <audio id='hello' src={`../../audio/hello.mp3`}/>
      <h1 onClick={()=>{
        const hello = new Audio(document.getElementById('hello').src)
        hello.play()
        }}>Hello</h1>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

const mapDispatch = (dispatch) => {
  return {
    playAudio : (name) => dispatch(playAudio(name))
  }
}

export default connect(mapState, mapDispatch)(Home);
