import React, {useRef, useState} from 'react'
import {View, Text, Animated, TouchableOpacity, Dimensions} from 'react-native';
import Slider from '@react-native-community/slider';
// import { SkipPrevious } from '@mui/icons-material';

const Player = () => {

  let Height = Dimensions.get('window').height;
  let dynheight = useRef(new Animated.Value(Height*.1)).current;
  const dynOpacity = useRef(new Animated.Value(0)).current;

  const [isMinimized, setMinizedState] = useState(false);

  const changePlayerSize = () => {
            Animated.timing(dynheight, {
                toValue: Height,
                timing: 100,
                useNativeDriver: false
            }).start();
    }

  const Swipe = () => {
      return (
          <View style={{justifyContent: 'center', }}>
            <TouchableOpacity onPress={changePlayerSize} style={{height: '10%', marginBottom: 10, backgroundColor: '#7D7D7D', width: '25%', borderRadius: 25, alignSelf: 'center'}}>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMinizedState(!isMinimized)} style={{backgroundColor:'red', height: 100, width: 100}}>
            <Text style={{color: '#FFF', fontSize: 20}}>{ '' + isMinimized }</Text>
            </TouchableOpacity>
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

            {/* <SkipPrevious */}
            {/* /> */}

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

    <Animated.View style={[{ height: '100%', width: '100%', position: 'absolute', alignSelf: 'flex-end'}]}>
        <View style={{height: '95%', width: '95%', backgroundColor: '#3E3E3E', borderRadius: 25, alignSelf: 'center'}}>
          <View style={{width: '100%', paddingHorizontal: '10%', }}>
             <Swipe />
             <Cover />
             <Controls />
             <Related />
          </View>

        </View>
    </Animated.View>
  )
}

export default Player;