const initialState = {

}

function tasks (state = initialState, action) {
  switch(action.type){
    case 'ADD_SONGS':
      return {...state, initalState: action.payload}
    
    default: 
     return state;
  }
}

export default tasks;