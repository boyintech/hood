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
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Main =(props) => {
  const rwidth = Dimensions.get('window').width;
  return (
    <View style={{height:'100%', width: '100%',}}>
        <Image 
        style = {{height: '100%', width: '100%', position: 'absolute'}}
        resizeMethod = 'resize'
        resizeMode = 'stretch'
        source = {require('../assets/Vinyl.png')}
        />
        <View style={{height: '60%'}}>
        <Image 
        style = {{height: '100%', width: '95%', alignSelf: 'center'}}
        resizeMethod = 'resize'
        resizeMode = 'contain'
        source = {require('../assets/Disc.png')}
        />  
        </View>
        <View>
          <Text style={{fontSize: 22, alignSelf: 'center'}}>Enjoy the world of music with HooD</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Login")} style={{justifyContent: 'center',
            backgroundColor: '#FFF', 
            marginTop: 30, 
            width: '70%', 
            height: '22.5%', 
            alignSelf: 'center', 
            borderRadius: 7, 
            flexDirection: 'row',
            shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,}}>
                <Icon name='ios-musical-notes-sharp' size={30} color='#000' style={{alignSelf: 'center'}} />
                <Text style={{alignSelf: 'center', fontSize: 24, fontWeight: 'bold', color: '#000000'}}>Lets Start</Text>
            </TouchableOpacity>
        </View>
        
    </View>
  );
};

export default Main;
