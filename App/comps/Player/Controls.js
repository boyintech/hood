import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {useDispatch, useSelector} from 'react-redux';
import playerActions from '../../store/actions/playerActions'
import TrackPlayer, {State} from 'react-native-track-player';
import PlayerState from '../../store/reducers/PlayerState';
import { searchByID } from '../Home/SongsList.js';
import store from '../../store/';


let Height = Dimensions.get('window').height;
let Width = Dimensions.get('window').width;

const Controls = (song) => {

  const Play = playerActions().Play;
  const Pause = playerActions().Pause;
  const Prev = playerActions().Prev;
  const Next = playerActions().Next;
  const Reset = playerActions().Reset;

  console.log(song.songData.id);
  let currentTrack = searchByID(song.songData.id);

  const dispatch = useDispatch();
  
  const [PlayerState, updatePlayerState] = useState(store.getState().PlayerState);

  useEffect(() => {
    // updatePlayerState(store.getState().PlayerState);
  },
  [])

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
            onPress={() => Pause()}
            name = 'step-backward' size={30} style={{color: 'white', padding:10}} />                        
            <Icon
            onPress={() =>  Play()}
            name = {PlayerState.state === 'pause' ? 'play' : 'pause'} size={35} style={{color: 'white', }} />                        
            <Icon 
            onPress={() => Next()}
            name = 'step-forward' size={30} style={{color: 'white', padding: 10}} />                        
          </View>
    </View>
  )
}

export default Controls;