import React from 'react'
import {View, Text} from 'react-native';
import Slider from "react-native-slider";
import { SkipPrevious } from '@mui/icons-material';

const Player = () => {


  const Swipe = () => {
      return (
          <View style={{justifyContent: 'center'}}>
            <View style={{height: '10%', marginBottom: 10, backgroundColor: '#7D7D7D', width: '25%', borderRadius: 25, alignSelf: 'center'}}>
            </View>
            <View style={{height: 10, width: 10, backgroundColor: '#7D7D7D', borderRadius: 100, alignSelf: 'center'}}>
            </View>
          </View>
      )
  }

  const Cover = () => {
    return (
      <View style={{height: '57.5%', backgroundColor: '#83B29F', borderRadius: 15}}>

      </View>
    )
  }

  const Controls = () => {
      return (
        <View>
          <Text style={{alignSelf: 'center', }}>Now Playing</Text>
          <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>Artist</Text>
            <Slider
            style={{width: '100%', }}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor='#FFFFFF'
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#7D7D7D"
            />

            <SkipPrevious
            />

        </View>
      )
  }

  const Related = () => {
    return (
      <View>

      </View>
    )
  }

  return (
    <View style={{justifyContent: 'flex-end', height: '100%'}}>
        <View style={{height: '95%', width: '95%', backgroundColor: '#3E3E3E', borderRadius: 25, alignSelf: 'center'}}>
          <View style={{width: '100%', paddingHorizontal: '10%', }}>
             <Swipe />
             <Cover />
             <Controls />
             <Related />
          </View>
        </View>
    </View>
  )
}

export default Player;