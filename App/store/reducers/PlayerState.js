import TrackPlayer from "react-native-track-player"

const initialState = {
    state: '',
    songTitle: '',
    songIndex: '',
    duration: '',
}

function PlayerState (state = initialState, action) {
  switch(action.type){
    case 'PLAY':
      console.log(action.type, action.payload);
      return {...state, initialState: action.payload}
    case 'PAUSE':
       console.log(action.type, action.payload);
      return {...state, initialState: action.payload}
    case 'STOP':
      console.log(action.type, action.payload);   
      return {...state, initialState: action.payload}
    case 'PREV':
        console.log(action.type, action.payload);   
        return {...state, initialState: action.payload}
    case 'NEXT':
        console.log(action.type, action.payload);   
        return {...state, initialState: action.payload}
    case 'SEEKTO':
        console.log(action.type, action.payload);   
        return {...state, initialState: action.payload}
    default: 
     return state;
  }
}

export default PlayerState;