import { useDispatch } from "react-redux";
import TrackPlayer, {State} from 'react-native-track-player';

export default function playerActions(){

  const dispatch = useDispatch();

  const Play = (track) => {
    // TrackPlayer.play();
    dispatch({type: 'PLAY', payload: {track, state: 'play'}});
  }

 const Pause = async (track) => {
    dispatch({type: 'PAUSE', payload: {track, state: 'pause'}});
    // TrackPlayer.pause();
  }
 const Stop = async (track) => {
    dispatch({type: 'STOP', payload: {track, state: 'pause'}});
    // TrackPlayer.stop();
  }
 const Prev = (track) => {
    dispatch({type: 'PREV', payload: {track, state: 'play'}});
    // TrackPlayer.skipToPrevious();
  }

 const Next = (track) => {
      dispatch({type: 'NEXT', payload: {track, state: 'play'}});
      // TrackPlayer.skipToNext();
  }
 const Reset = async (track) => {
    // TrackPlayer.reset();
  }

  return { Play, Pause, Stop, Prev, Next, Reset };

};




  // const Play = () => {
  //     let TD = {};
  //   try {
  //     TD = searchByID(song.songData.id);
  //     console.log(TD);
  //   } catch(e) {
  //     console.log(e);
  //   }
  //   TrackPlayer.play();

  //   dispatch({type: 'PLAY', payload: TD });
  //   setButtonClicked('play');
  // }

//  const Pause = async () => {
//     dispatch({type: 'PAUSE', payload: {state: 'play',
//                                         songTitle: '',
//                                         songIndex: '',
//                                         duration: '',} });
//     TrackPlayer.pause();
//     setButtonClicked('pause');
//   }

//  const Stop = async () => {
//     dispatch({type: 'STOP', payload: {state: 'play'}});
//     TrackPlayer.stop();
//     setButtonClicked('pause');
//   }
//  const Prev = () => {
//     dispatch({type: 'PREV', payload: {state: 'play'}});
//     TrackPlayer.skipToPrevious();
//     setButtonClicked('pause');
//   }
//  const Next = () => {
//       dispatch({type: 'NEXT', payload: {state: 'play'}});
//       TrackPlayer.skipToNext();
//       setButtonClicked('pause');
//   }
//  const Reset = async () => {
//     TrackPlayer.reset();
//   }