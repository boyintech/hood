import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, ScrollView, ActivityIndicator} from 'react-native';
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

// TrackPlayer.updateOptions({
//     stopWithApp: false,
//     capabilities: [TrackPlayer.CAPABILTY_PLAY, TrackPlayer.CAPABILTY_PAUSE],
//     compactCapabilities: [
//         TrackPlayer.CAPABILTY_PLAY, 
//         TrackPlayer.CAPABILTY_PAUSE
//     ]
// });

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
        {/* <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <TouchableOpacity 
        onPress={() => play()}
        style={{height: '30%', width: 120, backgroundColor: 'black', marginLeft: 10}}>
            <Text>Play</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => pause()}
        style={{height: '30%', width: 120, backgroundColor: 'black', marginLeft: 10}}>
            <Text>PAUSE</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => stop()}
        style={{height: '30%', width: 120, backgroundColor: 'black', marginLeft: 10}}>
            <Text>Stop</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => prev()}
        style={{height: '30%', width: 120, backgroundColor: 'black', marginLeft: 10, marginTop: 10}}>
            <Text>Prev</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => next()}
        style={{height: '30%', width: 120, backgroundColor: 'black', marginLeft: 10, marginTop: 10}}>
            <Text>Next</Text>
        </TouchableOpacity>
        </View> */}

    </View>
    );
}

export default Home;