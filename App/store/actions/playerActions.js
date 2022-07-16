import { useDispatch } from "react-redux";
import TrackPlayer, {State} from 'react-native-track-player';
import { searchByID } from "../../comps/Home/SongsList";
import SongsList from "../../comps/Home/SongsList";

export default function playerActions(){

  const dispatch = useDispatch();

  const Play = async (track) => {
    let trackIndex = await TrackPlayer.getCurrentTrack();
    let trackObject = await TrackPlayer.getTrack(trackIndex);
    dispatch({type: 'PLAY', payload: {state: 'play', ...trackObject}});
    TrackPlayer.play();
  }

 const Pause = async () => {
    let trackIndex = await TrackPlayer.getCurrentTrack();
    let trackObject = await TrackPlayer.getTrack(trackIndex);
    dispatch({type: 'PAUSE', payload: {state: 'pause', ...trackObject}});
    TrackPlayer.pause();
  }

 const Stop = async (track) => {
    dispatch({type: 'STOP', payload: {track, state: 'pause'}});
    TrackPlayer.stop();
  }


 const Prev = async() => {
  try{
    TrackPlayer.skipToPrevious();
    let trackIndex = await TrackPlayer.getCurrentTrack();
    let trackObject = await TrackPlayer.getTrack(trackIndex);
    dispatch({type: 'PREV', payload: {state: 'play', ...trackObject}});
    TrackPlayer.play();
  }catch(e){
    console.log(e, "First Song");
    }
  }

 const Next = async () => {
  try{
    TrackPlayer.skipToNext();
    let trackIndex = await TrackPlayer.getCurrentTrack();
    let trackObject = await TrackPlayer.getTrack(trackIndex);

    dispatch({type: 'NEXT', payload: {state: 'play', ...trackObject}});
    TrackPlayer.play();
   } catch(e) {
    console.log(e, "Last Song")
   }
  }

 const Reset = async (track) => {
    TrackPlayer.reset();
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