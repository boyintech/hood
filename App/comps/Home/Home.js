import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Player from '../Player/Player';
import SongsList from './SongsList.js';
import SongListComponent from '../Player/SongListComponent.js';
import Icon from 'react-native-vector-icons/AntDesign';
import TrackPlayer from 'react-native-track-player';
import GlobalBackground from '../GlobalBackground.js';
import {useSelector} from 'react-redux';
import AppPlayer from './AppPlayer';


    

const Header = () => {

    return (
        <>
        <View style={{width: '100%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
        <View style={{height: 50, width: 50, borderRadius: 100, alignSelf: 'center'}}>
            
        </View> 
        <View style={{height: 50, width: 50, justifyContent: 'center', backgroundColor: '#83B29F', borderRadius: 100, alignSelf: 'center', }}>
            <Text style={{fontSize: 24, alignSelf: 'center'}}>B</Text>
        </View>    
        <View style={{height: 50, width: 50, borderRadius: 100, alignSelf: 'center', justifyContent: 'center' }}>
            <Icon
             name = 'setting'
             size={45}
             />
        </View>
        </View>
        <View style={{  }} >
            <TextInput 
            opacity = {0.88}
            style={{width: '90%', backgroundColor: '#484848', alignSelf: 'center', borderRadius: 30, padding: '2%', justifyContent: 'center'}}
            >
            <Image
            style={{height: 25, width: 25, backgroundColor: '#FFF'}}
            source={require('../../assets/search.png')}
            />
            <Text opacity={0.8} style={{fontSize: 20, }}>Search</Text> 
            </TextInput>
        </View> 
        </>  
        );
}

const Home = (props) => {
    const SongList = SongsList();

     useEffect(() => {
        AppPlayer.initializePlayer();
    }, []);

//     var track = {
//     url: SongList[0].data.path,
//     title: SongList[0].data.name,
//     artist: 'deadmau5',
//     album: 'while(1<2)',
//     genre: 'Progressive House, Electro House',
//     date: '2014-05-20T07:00:00+00:00', // RFC 3339
//     artwork: 'http://example.com/cover.png', // Load artwork from the network
//     duration: 402 // Duration in seconds
// };
    
const togglePlayback = async () => {
        // setAudioStatus(!AudioStatus)
        const currentTrack = await TrackPlayer.getCurrentTrack();
        console.log(currentTrack);
        if (currentTrack == null) {
            // await TrackPlayer.add(track);
            // await TrackPlayer.play();
        }
    }


    return (
    <View style={{height:'100%', width: '100%' ,alignContent: "center",}}>
    <GlobalBackground type={'image'} />
    <View style={{height: '15%', flexDirection: 'column', }}>
    <Header />
    </View>
        <ScrollView
        // contentContainerStyle={styles.contentContainer}
        style={{paddingVertical: '2%'}}
        >
        {
                SongList.map((songs) => {
                return (songs.data.map((song) => <SongListComponent songData = {song} key={song.id} />));
                })
        }
        </ScrollView>
        <TouchableOpacity 
        onPress={() => togglePlayback()}
        style={{height: 40, width: 100, backgroundColor: 'black'}}
        />
    {/* <Player /> */}
    </View>
    );
}

export default Home;