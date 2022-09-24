import React, {useEffect, useState} from 'react'
import {View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import TrackPlayer, {State} from 'react-native-track-player';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../store/';
import { useProgress } from 'react-native-track-player';
import playerActions from '../../store/actions/playerActions'
import {searchByID} from '../Home/SongsList.js';


// import Controls from './Controls.js';


  let Height = Dimensions.get('window').height;
  let Width = Dimensions.get('window').width;


  const Cover = () => {
    return (
      <View style={{height: Height*.3, width: Width*.60, alignSelf: 'center', backgroundColor: '#83B29F', borderRadius: 15, marginVertical: '5%' }}>
      </View>
    )
  }


const Player = (songData) => {

  const Play = playerActions().Play;
  const Pause = playerActions().Pause;
  const Prev = playerActions().Prev;
  const Next = playerActions().Next;
  const Reset = playerActions().Reset;
  let currentTrack = searchByID(songData.route.params.song.id);
  const dispatch = useDispatch();
  const [PlayerState, updatePlayerState] = useState(store.getState().PlayerState);
  const [isPlaying, setisPlaying] = useState(PlayerState.state === 'play' ? true : false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [secLeft, setsecLeft] = useState(0);
  const progress = useProgress();

  const movetoIndex = async (trackIndex) => {
    try{
      await TrackPlayer.skip( parseFloat(trackIndex) ).
      then(() => {
        Play().then(() => updatePlayerState(store.getState().PlayerState) )
      })
    } catch(e) {
      console.log(e);
    }
  }

  console.log(PlayerState);

  const Controls = (song = songData.route.params.song) => { 
    return (
      <View style={{ width: '100%',  }}>
            <View style={{marginLeft: '4%',}}>
              <Text style={{color: 'white', alignSelf: 'center',  }}>{PlayerState.title}</Text>
              {/* <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center', fontWeight: 'bold' }}>Artist</Text>                 */}
            </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
         <Text style={{alignSelf: 'center', marginRight: 2}}>{Math.floor(progress.position / 60)}:{(progress.position%60).toFixed(0)}</Text>
          <MultiSlider
          containerStyle={{ alignSelf: 'center', }}
          trackStyle={{backgroundColor: '#7D7D7D', height: 5, borderRadius: 5, }}
          markerStyle={{ backgroundColor: 'white', marginTop: 5}}
          markerContainerStyle={{justifyContent: 'center'}}
          // sliderLength={ 250 }
          showStepMarkers={false}
          max={duration == 0 ? 100: progress.duration}
          onValuesChangeFinish={(val) => {
              TrackPlayer.seekTo(val[0]);
          }}
          step={1}
          values={[progress.position]}
          markerSize={20}
          />
          <Text style={{alignSelf: 'center'}}>{Math.floor(progress.duration / 60)}:{ (progress.duration%60).toFixed(0) }</Text>
          </View> 
              <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', paddingHorizontal: '10%' }}>
              <Icon 
              onPress={() => {
                Prev().then(() => updatePlayerState(store.getState().PlayerState))
              }}
              name = 'step-backward' size={30} style={{color: 'white', padding:10}} />                        
              <View style= {{backgroundColor: 'white', justifyContent: 'center', borderRadius: 100, width: 50, height: 50, flexDirection: 'row', alignItems: 'center'}}>
              <Icon
              onPress={ () =>  {
                if(PlayerState.state === 'pause'){
                  Play().then(() => updatePlayerState(store.getState().PlayerState)) 

                  setisPlaying(false);
                }
                else {
                  Pause().then(() => updatePlayerState(store.getState().PlayerState)) 
                  setisPlaying(false);
                }
               }}
              name = {PlayerState.state === 'play' ? 'pause' : 'play'} size={32} style={{color: '#3E3E3E', marginLeft: 6, }} />
              </View>                        
              <Icon 
              onPress={() => Next().then(() => updatePlayerState(store.getState().PlayerState))}
              name = 'step-forward' size={30} style={{color: 'white', padding: 10}} />                        
            </View>
      </View>
    )
  }

  useEffect(() => {
    // movetoIndex(songData.route.params.song.id);
    // const interval = setInterval(() =>{
    //   getDuration().then((res) => {
    //     setDuration(res.duration);
    //     setPosition(res.position);
    //   });
    // }, 1000)
    // return () => clearInterval(interval)
  }, []);

  const getDuration = async () => {
    const position = await TrackPlayer.getPosition();
    const duration = await TrackPlayer.getDuration();
    try {
      let trackIndex = await TrackPlayer.getCurrentTrack();
      let trackObject = await TrackPlayer.getTrack(trackIndex);
      // console.log(`Title: ${trackObject.title}`);
      const statRes = await stat(songData.route.params.song.url)
      // console.log(`${duration - position} seconds left.`);
      // console.log(duration, position);
    } catch(e) {
      console.log(e);
    }
    return {position, duration};
  }



  return (
      <View style={[{ height: '100%', width: '100%', paddingVertical: '2%', backgroundColor: '#3E3E3E', alignSelf: 'flex-end', bottom: 0,}]}>
          <View 
          // onPress={() => {isMinimized ? changePlayerSize() : Nothing()} } 
          // activeOpacity={ isMinimized ? 0.2 : 1} 
          style={{height: '100%', width: '100%', backgroundColor: '#3E3E3E', borderRadius: 25, }}>
            <View style={{width: '100%',
                         paddingHorizontal: '5%',
                         
                        //  flexDirection: isMinimized ? 'row' : 'column',
                         }}>

              <Cover />   
              <Controls songData ={songData.route.params.song} />
              {/* <Swipe />
              <Related />  */}
            </View>
          </View>
      </View>
  );
}

export default Player;