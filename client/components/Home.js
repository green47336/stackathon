import React from "react";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const Home = (props) => {


  return (
    <div>

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
