import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, ScrollView, Dimensions, ActivityIndicator} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Player from '../Player/Player';
import SongsList from './SongsList.js';
import SongListComponent from '../Player/SongListComponent.js';
import Header from '../Header';
import Icon from 'react-native-vector-icons/AntDesign';
import TrackPlayer, { Capability } from 'react-native-track-player';
import GlobalBackground from '../GlobalBackground.js';
import { useDispatch } from 'react-redux';
import { CatchingPokemonSharp } from '@mui/icons-material';
import MultiSlider from '@ptomasroos/react-native-multi-slider';


// TrackPlayer.updateOptions({
//     stopWithApp: false,
//     capabilities: [TrackPlayer.CAPABILTY_PLAY, TrackPlayer.CAPABILTY_PAUSE],
//     compactCapabilities: [
//         TrackPlayer.CAPABILTY_PLAY, 
//         TrackPlayer.CAPABILTY_PAUSE
//     ]
// });

let Height = Dimensions.get('window').height;
let Width = Dimensions.get('window').width;

const Home = (props) => {

    const dispatch = useDispatch();
    const [tracksLoaded, setTracksLoaded] = useState(false);
    const SongList = SongsList();
    const [tracks, setTracks] = useState([]);


    useEffect(() => {
        addTracks().then(async (track) => {
            setTracks(track);
            try {
                await TrackPlayer.add(track);
            } catch(e) {
                console.log(e);
            }            
        }).then(() => setTracksLoaded(true));
    }, []);

    // const setPlayerTracks = async () => {
    //     try {
    //         await TrackPlayer.add(tracks);
    //     } catch(e) {
    //         console.log(e);
    //     }
    // }

    const addTracks = async () => {
        let track = []
        // let id = 0;
        SongList.map(async (content, i) => {
            await content.data.map((data, i) => {
                track.push({
                    id: data.id,
                    url: data.path,
                    title: data.name
                })
                // id++;
            })
        });
        return Promise.all(track);
    }

    const Controls = (song = songData.route.params.song) => { 
        return (
            <View style={{  }}>
                <MultiSlider
                containerStyle={{ marginTop: -23, position: 'absolute' }}
                trackStyle={{backgroundColor: '#7D7D7D', height: 5, borderRadius: 5, }}
                markerStyle={{ backgroundColor: 'white', marginTop: 5, marginLeft: 12 }}
                markerContainerStyle={{justifyContent: 'center'}}
                sliderLength={ 410 }
                showStepMarkers={false}
                //   max={duration == 0 ? 100: progress.duration}
                onValuesChangeFinish={(val) => {
                  TrackPlayer.seekTo(val[0]);
                }}
                step={1}
                //   values={[progress.position]}
                markerSize={30}
                />
                <View style={{flexDirection: 'row'}}>  
                <View style={{height: '70%', width: '18%', backgroundColor: '#83B29F', borderRadius: 10, margin: '4%',}}>

                </View>

                <View>
                    <Text style={{color: '#FFF', fontWeight: '500'}}>asd</Text>
                    <Text style={{color: '#FFF', fontWeight: '500', marginTop: 3}}></Text>
                </View>

                </View>
            </View>
        )
      }

    return (
    <View style={{height:'100%', width: '100%' ,alignContent: "center",}}>
    <GlobalBackground type={'image'} />
    <View style={{height: '15%', flexDirection: 'column', }}>
    <Header />
    </View>
    <View>
    </View>
        <ScrollView
        // contentContainerStyle={styles.contentContainer}
        style={{paddingVertical: '2%'}}
        >
        { !tracksLoaded ? <ActivityIndicator /> :
                tracks.map((song) => {
                    return(
                    <TouchableOpacity 
                    
                    key = {song.key}
                    onPress={() => props.navigation.navigate("Player", {song: song})}
                    >
                    <SongListComponent song = {song} key = {song.key} />
                    </TouchableOpacity>
                    )
                })
        }
        </ScrollView>
        
        <View style={{ width: '100%', height: '12%', backgroundColor: '#3E3E3E'}}>
          <Controls songData ={{"id": "0", "state": "pause", "title": "Childish Gambino - Redbone (Instrumental).mp3", "url": "file:///storage/emulated/0/Download/Childish Gambino - Redbone (Instrumental).mp3"}} />
        </View>

    </View>
    );
}

export default Home;



//  <View style={{ width: '100%',  }}>
// <View style={{marginLeft: '4%',}}>
//   <Text style={{color: 'white', alignSelf: 'center',  }}>hello</Text>
//   {/* <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center', fontWeight: 'bold' }}>Artist</Text>                 */}
// </View>
// <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
// {/* <Text style={{alignSelf: 'center', marginRight: 2}}>{Math.floor(progress.position / 60)}:{(progress.position%60).toFixed(0)}</Text> */}
// {/* <Text style={{alignSelf: 'center'}}>{Math.floor(progress.duration / 60)}:{ (progress.duration%60).toFixed(0) }</Text> */}
// </View> 
//   <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', paddingHorizontal: '5%' }}>
//   <Icon 
//   onPress={() => {
//     // Prev().then(() => updatePlayerState(store.getState().PlayerState))
//   }}
//   name = 'step-backward' size={30} style={{color: 'white', padding:10}} />                        
//   {/* <View style= {{backgroundColor: 'white', justifyContent: 'center', borderRadius: 100, width: 32, height: 32, flexDirection: 'row', alignItems: 'center'}}> */}
//   <Icon
// //   onPress={ () =>  {
// //     if(PlayerState.state === 'pause'){
// //       Play().then(() => updatePlayerState(store.getState().PlayerState)) 

// //       setisPlaying(false);
// //     }
// //     else {
// //       Pause().then(() => updatePlayerState(store.getState().PlayerState)) 
// //       setisPlaying(false);
// //     }
// //    }}
//   name = 'play' size={35} style={{color: 'white', backgroundColor: '#3E3E3E',borderRadius: 25}} />
//   {/* </View>                         */}
//   <Icon 
// //   onPress={() => Next().then(() => updatePlayerState(store.getState().PlayerState))}
//   name = 'step-forward' size={30} style={{color: 'white', padding: 10}} />                        
// </View>
// </View>