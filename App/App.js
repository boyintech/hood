import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Main from "./comps/Main";
import Login from "./comps/Login/Login.js";
import OTP from "./comps/Login/OTP.js";
import { NavigationContainer } from '@react-navigation/native';
import {Text, View} from 'react-native';
import Home from "./comps/Home/Home";

const App =() => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
   </NavigationContainer>
    );
};
export default App;
