import React from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Player from '../Player/Player';
import SongList from './SongList.json';
import SongListComponent from '../Player/SongListComponent.js';

const Header = () => {
    return (
        <>
        <View style={{width: '100%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
        <View style={{height: 50, width: 50, borderRadius: 100, alignSelf: 'center'}}>
            
        </View> 
        <View style={{height: 50, width: 50, justifyContent: 'center', backgroundColor: '#83B29F', borderRadius: 100, alignSelf: 'center', }}>
            <Text style={{fontSize: 24, alignSelf: 'center'}}>B</Text>
        </View>    
        <View style={{height: 50, width: 50, borderRadius: 100, alignSelf: 'center', }}>
            <Image
             source = {require('../../assets/settings.png')}
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
    return (
    <View style={{height:'100%', width: '100%' ,alignContent: "center",}}>
        <Image 
        style = {{height: '100%', width: '100%', position: 'absolute'}}
        resizeMethod = 'resize'
        resizeMode = 'stretch'
        source = {require('../../assets/Vinyl.png')}
        />
    <View style={{height: '15%', flexDirection: 'column', }}>
    <Header />
    </View>
    <View  style={{}}>
        <ScrollView
        // contentContainerStyle={styles.contentContainer}
        style={{}}
        >
        {
                SongList.map((data) => {
                return (<SongListComponent key={data.id} />);
                })
        }
        </ScrollView>
    </View>
    <Player />
    </View>
    );
}

export default Home;