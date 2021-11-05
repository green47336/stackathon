import axios from 'axios'
import history from '../history'


/**
 * ACTION TYPES
 */
const PLAY_AUDIO = 'PLAY_AUDIO'

/**
 * ACTION CREATORS
 */
const _playAudio = audio => ({type: PLAY_AUDIO, audio})

/**
 * THUNK CREATORS
 */
export const playAudio = (audioName) => async dispatch => {
    // Eventually count up global stats here or maybe just have a different thunk
}


/**
 * REDUCER
 */
export default function(state = {}, action) {
  switch (action.type) {
    case PLAY_AUDIO:
      return action.audio
    default:
      return state
  }
}
