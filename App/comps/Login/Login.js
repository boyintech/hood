import {View, Text, TextInput, Image, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GlobalBackground from '../GlobalBackground.js';

const Login = (props) => {
    return (
    <View style={{height:'100%', width: '100%', alignContent: "center",}}>
    <GlobalBackground type={'image'} />
    <View style={{height: '50%', width: '100%'}}>

    <Image 
    style = {{height: '100%', width: '98%', position: 'absolute'}}
    resizeMethod = 'resize'
    resizeMode = 'contain'
    source = {require('../../assets/homepage.png')}
    />
    </View>

            <View style={{ justifyContent: 'center', alignSelf: "center", height:'45%', width: '90%', borderRadius: 25}}>
            <Text style={{fontSize: 40, margin:15, color: 'white'}}>Login</Text>
            <TextInput placeholder='Enter Phone Number' style={{borderRadius: 30, width: '100%', height: '15%', backgroundColor: 'white', alignSelf: 'center', marginTop: 20}} />
            <TouchableOpacity onPress={() => props.navigation.navigate("OTP")} style={{justifyContent: 'center',backgroundColor: '#3E3E3E', marginTop: 30, width: '70%', height: '35%', alignSelf: 'center', borderRadius: 7, shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,}}>
                <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: 'bold', color: '#FFF'}}>Login</Text>
            </TouchableOpacity>
            </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
  box: {
    width: '100%',
    height: 200,
  },
  button: {
    marginTop: 50,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24
  }
});

export default Login;

