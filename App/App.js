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
