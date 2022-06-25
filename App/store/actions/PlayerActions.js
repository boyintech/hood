import { useDispatch } from "react-redux";
import TrackPlayer, {State} from 'react-native-track-player';


export const Play = async () => {
    const dispatch = useDispatch();
    TrackPlayer.play();
    return (payload) => {
        dispatch({type: 'PLAY', payload: {state: 'play'}});
    }
  }

export const Pause = async () => {
    dispatch({type: 'PAUSE', payload: {state: 'pause'}});
    TrackPlayer.pause();
  }

export const Stop = async () => {
    dispatch({type: 'STOP', payload: {state: 'stop'}});
    TrackPlayer.stop();
  }

export const Prev = () => {
    dispatch({type: 'PREV', payload: {state: 'prev'}});
    TrackPlayer.skipToPrevious();
  }

export const Next = () => {
      dispatch({type: 'NEXT', payload: {state: 'next'}});
      TrackPlayer.skipToNext();
  }

export const Reset = async () => {
    TrackPlayer.reset();
  }