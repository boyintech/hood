import {combineReducers, createStore} from 'redux';
import tasks from './reducers/tasks';

const RootReducers = combineReducers({
	tasks
})

export default store = createStore(RootReducers);