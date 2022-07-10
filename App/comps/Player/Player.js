import React, {useEffect, useState} from 'react'
import {View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import TrackPlayer, {State} from 'react-native-track-player';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../store/';

import playerActions from '../../store/actions/playerActions'
import {searchByID} from '../Home/SongsList.js';


// import Controls from './Controls.js';


  let Height = Dimensions.get('window').height;
  let Width = Dimensions.get('window').width;


  const Cover = () => {
    return (
      <View style={{height: Height*.4, width: Width*.75, alignSelf: 'center', backgroundColor: '#83B29F', borderRadius: 15}}>

      </View>
    )
  }


  const movetoIndex = async (trackIndex) => {
   await TrackPlayer.skip( parseFloat(trackIndex) );
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
  const [isPlaying, setisPlaying] = useState(PlayerState.state === 'play' ? true : false)
  console.log(PlayerState);

  const Controls = (song = songData.route.params.song) => { 
    return (
      <View style={{ width: '100%',  }}>
            <View style={{marginLeft: '4%',}}>
              <Text style={{color: 'white', alignSelf: 'center',  }}>c</Text>
              {/* <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center', fontWeight: 'bold' }}>Artist</Text>                 */}
            </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
         <Text style={{alignSelf: 'center', marginRight: 2}}>00:00</Text>
          <MultiSlider
          containerStyle={{ alignSelf: 'center', }}
          trackStyle={{backgroundColor: '#7D7D7D', height: 5, borderRadius: 5, }}
          markerStyle={{ backgroundColor: 'white', marginTop: 5}}
          markerContainerStyle={{justifyContent: 'center'}}
          sliderLength={ Width*.65 }
          showStepMarkers={false}
          
          markerSize={10}
          />
          <Text style={{alignSelf: 'center'}}>03:06</Text>
          </View> 
              <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', paddingHorizontal: '10%' }}>
              <Icon 
              onPress={() => {Pause(currentTrack); updatePlayerState(store.getState().PlayerState) }}
              name = 'step-backward' size={30} style={{color: 'white', padding:10}} />                        
              <Icon
              onPress={ () =>  {
                if(PlayerState.state === 'pause'){
                  Play(currentTrack); 
                  updatePlayerState(store.getState().PlayerState);
                  setisPlaying(false);
                }
                else {
                  Pause(currentTrack); 
                  updatePlayerState(store.getState().PlayerState);
                  setisPlaying(false);
                }
               }}
              name = {PlayerState.state === 'play' ? 'pause' : 'play'} size={35} style={{color: 'white', }} />                        
              <Icon 
              onPress={() => Next()}
              name = 'step-forward' size={30} style={{color: 'white', padding: 10}} />                        
            </View>
      </View>
    )
  }

  useEffect(() => {
    movetoIndex(songData.route.params.song.id);
  }, []);

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