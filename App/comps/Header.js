import React from 'react';
import {View, TextInput, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


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
            source={require('../assets/search.png')}
            />
            <Text opacity={0.8} style={{fontSize: 20, }}>Search</Text> 
            </TextInput>
        </View> 
        </>  
        );
}

export default Header;