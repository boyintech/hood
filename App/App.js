import { createStackNavigator } from "@react-navigation/stack";
import React, {useEffect} from "react";
import {Provider} from 'react-redux';
import Main from "./comps/Main";
import Login from "./comps/Login/Login.js";
import OTP from "./comps/Login/OTP.js";
import { NavigationContainer } from '@react-navigation/native';
import Home from "./comps/Home/Home";
import TrackPlayer, {Capability} from "react-native-track-player";
import Player from './comps/Player/Player.js';

import store from "./store";


const App =() => {


  useEffect(() => {
    setupTrackPlayer();
    // AppPlayer.initializePlayer();
    return () => TrackPlayer.destroy();
}, []);

const setupTrackPlayer = async () => {
  try {
      // await TrackPlayer.updateOptions({
      //     stopWithApp: false, // false=> music continues in background even when app is closed
      //     // Media controls capabilities
      //     capabilities: [
      //         TrackPlayer.CAPABILITY_PLAY,
      //         TrackPlayer.CAPABILITY_PAUSE,
      //         TrackPlayer.CAPABILITY_STOP,
      //         TrackPlayer.CAPABILITY_SEEK_TO,
      //     ],
      //     // Capabilities that will show up when the notification is in the compact form on Android
      //     compactCapabilities: [
      //         TrackPlayer.CAPABILITY_PLAY,
      //         TrackPlayer.CAPABILITY_PAUSE,
      //         TrackPlayer.CAPABILITY_STOP,
      //         TrackPlayer.CAPABILITY_SEEK_TO,
      //     ],
      // });
      await TrackPlayer.setupPlayer().then(() => console.log("Player setup Done"));
      await TrackPlayer.updateOptions({
        stopWithApp: true, 
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
        ],
        // compactCapabilities: [
        //   Capability.Play,
        //   Capability.Pause,
        //   Capability.SkipToNext,
        //   Capability.SkipToPrevious,
        // ],
        notificationCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
        ],
      });
  } catch(e) {
      console.log(e)
  }
}


  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Player" component={Player} />
      </Stack.Navigator>
   </NavigationContainer>
  </Provider>
    );
};
export default App;
