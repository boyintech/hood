import React, {useRef, useState} from 'react'
import {View, Text, Animated, TouchableOpacity, Dimensions} from 'react-native';
import Slider from '@react-native-community/slider';
// import { SkipPrevious } from '@mui/icons-material';

const Player = () => {

  let Height = Dimensions.get('window').height;
  let dynheight = useRef(new Animated.Value(Height*.15)).current;
  const dynOpacity = useRef(new Animated.Value(0)).current;

  const [isMinimized, setMinizedState] = useState(true);

  const changePlayerSize = () => {
            Animated.spring(dynheight, {
                toValue: isMinimized ? Height : Height * .2,
                timing: 100,
                useNativeDriver: false
            }).start(() => setMinizedState(!isMinimized));
    }

  const Swipe = () => {
      return (
          <View style={{justifyContent: 'center', }}>
            <TouchableOpacity onPress={() => changePlayerSize()} style={{height: '10%', marginBottom: 10, backgroundColor: '#7D7D7D', width: '25%', borderRadius: 25, alignSelf: 'center'}}>
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

    <Animated.View style={[{ height: dynheight, width: '100%', position: 'absolute', backgroundColor: '#3E3E3E', alignSelf: 'flex-end', bottom: 0 }]}>
        <View style={{height: '95%', width: '95%', backgroundColor: '#3E3E3E', borderRadius: 25, alignSelf: 'center'}}>
          <Animated.View style={{width: '100%', paddingHorizontal: '10%', flexDirection: isMinimized ? 'row' : 'column'  } }>
            <Swipe />
            <Cover />
            <Controls />
            <Related />
          </Animated.View>

        </View>
    </Animated.View>
  )
}

export default Player;