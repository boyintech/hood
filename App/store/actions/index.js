import { useDispatch } from "react-redux";

const dispatch = useDispatch();

const play = () => {
    dispatch({type: 'PLAY', payload: {state: 'play'}});
	console.log("in play");
}

const pause = () => {
    dispatch({type: 'PAUSE', payload: {state: 'pause'}});
	console.log("in pause");	
}

const stop = () => {
	console.log("in stop");
}

const prev = () => {
	console.log("in prev");
}

const next = () => {
	console.log("in next");
}

export { play, pause, stop, prev, next };