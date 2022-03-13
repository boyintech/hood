import React from 'react';
import {View, Text, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const OTP = (props) => {
    return (
    <View style={{height:'100%', width: '100%', backgroundColor: '#292929',alignContent: "center",}}>
            <View style={{ justifyContent: 'center', alignSelf: "center", height:'45%', width: '90%', backgroundColor: "#393939", borderBottomStartRadius: 50, borderBottomEndRadius: 50}}>
            <Text style={{fontSize: 30, margin:15, color: 'white'}}>OTP</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: '2%'}}>
                <TextInput style={{borderRadius: 5, borderColor: '#FCC200', borderWidth: 4, width: '13%', backgroundColor: 'white', alignSelf: 'center'}} />
                <TextInput style={{borderRadius: 5, borderColor: '#FCC200', borderWidth: 4, width: '13%', backgroundColor: 'white', alignSelf: 'center'}} />
                <TextInput style={{borderRadius: 5, borderColor: '#FCC200', borderWidth: 4, width: '13%', backgroundColor: 'white', alignSelf: 'center'}} />
                <TextInput style={{borderRadius: 5, borderColor: '#FCC200', borderWidth: 4, width: '13%', backgroundColor: 'white', alignSelf: 'center'}} />
                <TextInput style={{borderRadius: 5, borderColor: '#FCC200', borderWidth: 4, width: '13%', backgroundColor: 'white', alignSelf: 'center'}} />
                </View>
            <TouchableOpacity onPress={() => props.navigation.navigate("Home")} style={{justifyContent: 'center',backgroundColor: '#FCC200', marginTop: 30, width: '45%', height: '35%', alignSelf: 'center', borderRadius: 50}}>
                <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: 'bold'}}>Verify</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={{fontSize: 18}}>Wrong Number? </Text>
                <Text onPress={() => props.navigation.goBack()} style={{fontSize: 18, color: '#FCC200', }}>Click Here</Text>
            </View>
            </View>
    </View>
    );
}

export default OTP;