import {combineReducers, createStore} from 'redux';
import tasks from './reducers/tasks';
import PlayerState from './reducers/PlayerState';

const RootReducers = combineReducers({
	tasks,
	PlayerState
})

export default store = createStore(RootReducers);