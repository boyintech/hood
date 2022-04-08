import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const OTP = (props) => {
    return (
    <View style={{height:'100%', width: '100%',alignContent: "center",}}>
        <Image 
        style = {{height: '100%', width: '100%', position: 'absolute'}}
        resizeMethod = 'resize'
        resizeMode = 'stretch'
        source = {require('../../assets/Vinyl.png')}
        />
        <View style={{width: '100%', height: '30%', marginBottom: '5%'}}> 
        <Text style={{fontSize: 30, margin:35, color: 'white'}}>OTP</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: '5%'}}>
                <TextInput style={{borderRadius: 5, borderColor: '#FCC200', borderWidth: 4, width: '13%', backgroundColor: 'white', alignSelf: 'center'}} />
                <TextInput style={{borderRadius: 5, borderColor: '#FCC200', borderWidth: 4, width: '13%', backgroundColor: 'white', alignSelf: 'center'}} />
                <TextInput style={{borderRadius: 5, borderColor: '#FCC200', borderWidth: 4, width: '13%', backgroundColor: 'white', alignSelf: 'center'}} />
                <TextInput style={{borderRadius: 5, borderColor: '#FCC200', borderWidth: 4, width: '13%', backgroundColor: 'white', alignSelf: 'center'}} />
                <TextInput style={{borderRadius: 5, borderColor: '#FCC200', borderWidth: 4, width: '13%', backgroundColor: 'white', alignSelf: 'center'}} />
            </View>
            <Text style={{fontSize: 18, margin:20, color: 'white', alignSelf: 'center'}}>Please check +91-xxxxxxxxxx</Text>

        </View>
            <View style={{ justifyContent: 'center', alignSelf: "center", height:'50%', width: '100 %', borderBottomStartRadius: 50, borderBottomEndRadius: 50}}>
            
                <Image 
                style = {{height: '100%', width: '98%', }}
                resizeMethod = 'resize'
                resizeMode = 'contain'
                source = {require('../../assets/otp.png')}
                />
            <TouchableOpacity onPress={() => props.navigation.navigate("Home")} style={{justifyContent: 'center',backgroundColor: '#3E3E3E', marginTop: 30, width: '70%', height: '35%', alignSelf: 'center', borderRadius: 7, shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,}}>
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