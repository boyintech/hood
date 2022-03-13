import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  Dimensions,
  View,
} from 'react-native';


const Main =(props) => {
  const rwidth = Dimensions.get('window').width;
  return (
    <View style={{height:'100%', width: '100%', backgroundColor: '#292929', justifyContent: 'center' }}>
      <View style={{height: '100%', width: '60%', backgroundColor: '#3E3E3E', position: 'absolute', borderTopEndRadius: 50, borderBottomEndRadius: 50, justifyContent: 'flex-end'}}>
          <View style={{height: '70%', width: '65%', backgroundColor: '#515151', alignSelf: 'flex-end', borderRadius: 100, borderTopEndRadius: 0, borderBottomEndRadius: 50}}>

          </View>
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate("Login")} style={{height:100,  width: 100, backgroundColor: '#484848', borderRadius: 50, alignSelf: 'flex-end', marginRight: .25*rwidth}}>

      </TouchableOpacity>
    </View>
  );
};

export default Main;
