const initialState = {
    state: 'pause',
    name: '',
    id: '',
    path: '',
    duration: '',
}

function PlayerState (state = initialState, action) {
  switch(action.type){
    case 'START':
      return action.payload
    case 'PLAY':
      return action.payload
    case 'PAUSE':
      return action.payload
    case 'STOP':   
      return action.payload
    case 'PREV':
        return action.payload
    case 'NEXT':
        return action.payload
    case 'SEEKTO':
        return action.payload
    default: 
     return state;
  }
}

export default PlayerState;