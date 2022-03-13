import {View, Text, TextInput} from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = (props) => {
    return (
    <View style={{height:'100%', width: '100%', backgroundColor: '#292929',alignContent: "center",}}>
            <View style={{ justifyContent: 'center', alignSelf: "center", height:'45%', width: '90%', backgroundColor: "#393939", borderBottomStartRadius: 50, borderBottomEndRadius: 50}}>
            <Text style={{fontSize: 30, margin:15, color: 'white'}}>Login</Text>
            <TextInput placeholder='Enter Phone Number' style={{borderRadius: 30, width: '90%', height: '15%', backgroundColor: 'white', alignSelf: 'center'}} />
            <TouchableOpacity onPress={() => props.navigation.navigate("OTP")} style={{justifyContent: 'center',backgroundColor: '#FCC200', marginTop: 30, width: '50%', height: '35%', alignSelf: 'center', borderRadius: 50}}>
                <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: 'bold'}}>Login</Text>
            </TouchableOpacity>
            </View>
    </View>
    );
}

export default Login