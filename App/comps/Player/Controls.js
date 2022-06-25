import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {useDispatch} from 'react-redux';
import { Play } from '../../store/actions/PlayerActions';
import TrackPlayer, {State} from 'react-native-track-player';

let Height = Dimensions.get('window').height;
let Width = Dimensions.get('window').width;

const Controls = (song) => {

  const dispatch = useDispatch();

  const Play = async () => {
    TrackPlayer.play();
    dispatch({type: 'PLAY', payload: {state: 'play'}});
  }

 const Pause = async () => {
    dispatch({type: 'PAUSE', payload: {state: 'pause'}});
    TrackPlayer.pause();
  }

 const Stop = async () => {
    dispatch({type: 'STOP', payload: {state: 'stop'}});
    TrackPlayer.stop();
  }
 const Prev = () => {
    dispatch({type: 'PREV', payload: {state: 'prev'}});
    TrackPlayer.skipToPrevious();
  }
 const Next = () => {
      dispatch({type: 'NEXT', payload: {state: 'next'}});
      TrackPlayer.skipToNext();
  }
 const Reset = async () => {
    TrackPlayer.reset();
  }

  return (
    <View style={{ width: '100%',  }}>
          <View style={{marginLeft: '4%',}}>
            <Text style={{color: 'white', alignSelf: 'center',  }}>{song.songData.title}</Text>
            <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center', fontWeight: 'bold' }}>Artist</Text>                
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
            <Icon name = 'step-backward' size={30} style={{color: 'white', padding:10}} />                        
            <Icon
            onPress={() => Play()}
            name = 'play-circle' size={50} style={{color: 'white', }} />                        
            <Icon 
            onPress={() => Pause()}
            name = 'step-forward' size={30} style={{color: 'white', padding: 10}} />                        
          </View>
    </View>
  )
}

export default Controls;