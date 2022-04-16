import React, {useRef, useState} from 'react'
import {View, Text, Animated, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
// import Slider from '@react-native-community/slider';
import SongListComponent from './SongListComponent.js';
import SongList from '../Home/SongList.json';
import Icon from 'react-native-vector-icons/FontAwesome';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const Player = () => {

  let Height = Dimensions.get('window').height;
  let Width = Dimensions.get('window').width;
  let dynheight = useRef(new Animated.Value(Height*.11)).current;
  const dynOpacity = useRef(new Animated.Value(0)).current;
  const coverHeight = useRef(new Animated.Value(Height*.08)).current;
  const coverWidth = useRef(new Animated.Value(Height*.08)).current;
  const marginCheck = useRef(new Animated.Value(0)).current;


  const [isMinimized, setMinizedState] = useState(true);
  const [thumbIcon, setthumbIcon] = useState();

  Icon.getImageSource('circle', 20, 'white')
   .then(source => setthumbIcon(source));

  const changePlayerSize = () => {
      Animated.parallel([
                Animated.timing(coverHeight, {
                  toValue: isMinimized ? Height*.4 : Height*.08,
                  timing: 0,
                  useNativeDriver: false
                }),
                Animated.timing(coverWidth, {
                  toValue: isMinimized ? Width * .75 : Height*.08,
                  timing: 0,
                  useNativeDriver: false
                }),
                Animated.timing(dynheight, {
                toValue: isMinimized ? Height*.95 : Height * .11,
                timing: 100,
                useNativeDriver: false
            }),
                Animated.timing(marginCheck, {
                  toValue: isMinimized ? Width*.2 : 0,
                  timing: 300,
                  useNativeDriver: false
                })
        ]).start();
      setMinizedState(!isMinimized);
    }

  const Swipe = () => {
      return (
          <View style={{justifyContent: 'center', marginTop: 10 }}>
            <TouchableOpacity onPress={() => changePlayerSize()} style={{height: 10, marginBottom: 10, backgroundColor: '#7D7D7D', width: '25%', borderRadius: 25, alignSelf: 'center'}}>
            </TouchableOpacity>
          </View>
      )
  }

  const Cover = () => {
    return (
      <Animated.View style={{height: coverHeight, width: coverWidth, alignSelf: 'center', backgroundColor: '#83B29F', borderRadius: 15}}>

      </Animated.View>
    )
  }

  const Controls = () => {
      return (
        <View style={{ width: isMinimized ? '80%' : '100%',  }}>
              <View style={{marginLeft: '4%',}}>
                <Text style={{color: 'white', alignSelf: isMinimized ? 'flex-start' : 'center',  }}>Now Playing</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: isMinimized ? 'flex-start' : 'center', fontWeight: 'bold' }}>Artist</Text>                
              </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {isMinimized ? <></> : <Text style={{alignSelf: 'center', marginRight: 2}}>00:00</Text>}
            <MultiSlider
            containerStyle={{ alignSelf: 'center', }}
            trackStyle={{backgroundColor: '#7D7D7D', height: 5, borderRadius: 5, }}
            markerStyle={{ backgroundColor: 'white', marginTop: 5}}
            markerContainerStyle={{justifyContent: 'center'}}
            sliderLength={ isMinimized ? Width*.50 : Width*.65}
            showStepMarkers={false}
            
            markerSize={10}
            />
            <Text style={{alignSelf: 'center'}}>03:06</Text>
            </View>
            {isMinimized ? <></> : 
                <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', paddingHorizontal: '10%' }}>
                <Icon name = 'step-backward' size={30} style={{color: 'white', padding:10}} />                        
                <Icon name = 'play-circle' size={50} style={{color: 'white', }} />                        
                <Icon name = 'step-forward' size={30} style={{color: 'white', padding: 10}} />                        
              </View>}
        </View>
      )
  }

  const Nothing = () => {
    return;
  }

  const Related = () => {
    return (
      !isMinimized ?
        <ScrollView
        // contentContainerStyle={styles.contentContainer}
        style={{marginTop: '5%'}}
        >
        {
                SongList.map((data) => {
                return (<SongListComponent key={data.id} />);
                })
        }
        </ScrollView>
        :
        <></>
    )
  }
  return (

    <Animated.View style={[{ height: dynheight, width: '100%', position: 'absolute', paddingVertical: '2%', backgroundColor: '#3E3E3E', alignSelf: 'flex-end', bottom: 0, borderRadius: 25, }]}>
        <TouchableOpacity onPress={() => {isMinimized ? changePlayerSize() : Nothing()} } activeOpacity={ isMinimized ? 0.2 : 1}  style={{height: '100%', width: '100%', backgroundColor: '#3E3E3E', borderRadius: 25}}>
          <Animated.View style={{width: '100%', paddingHorizontal: '5%', flexDirection: isMinimized ? 'row' : 'column',}}>
            <Swipe />
            <Cover />   
            <Controls />
            <Related /> 
          </Animated.View>
        </TouchableOpacity>
    </Animated.View>
  )
}

export default Player;