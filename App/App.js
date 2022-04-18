import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {Provider} from 'react-redux';
import Main from "./comps/Main";
import Login from "./comps/Login/Login.js";
import OTP from "./comps/Login/OTP.js";
import { NavigationContainer } from '@react-navigation/native';
import {Text, View} from 'react-native';
import Home from "./comps/Home/Home";
import TrackPlayer from 'react-native-track-player';

import store from "./store";

const App =() => {

// var track = {
//     url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Load media from the network
//     title: 'Avaritia',
//     artist: 'deadmau5',
//     album: 'while(1<2)',
//     genre: 'Progressive House, Electro House',
//     date: '2014-05-20T07:00:00+00:00', // RFC 3339
//     artwork: 'http://example.com/cover.png', // Load artwork from the network
//     duration: 402 // Duration in seconds
// };
// 
// const setUpTrackPlayer = async () => {
//         try {
//             await TrackPlayer.setupPlayer();
//             await TrackPlayer.updateOptions({
//                 stopWithApp: true,
//                 capabilities: [
//                     Capability.Play,
//                     Capability.Pause,
//                     Capability.SeekTo,
//                 ]
//             })
//             await TrackPlayer.add(track);
//         } catch (e) {
//             console.log(e);
//         }
//     };
// 
// TrackPlayer.setupPlayer({})
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
   </NavigationContainer>
  </Provider>
    );
};
export default App;
