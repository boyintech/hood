import React from 'react';
import {
  View, Text
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SongListComponent = (props) => {
    // console.log(props)
      return (
            <View
            style={{ width: '100%', flexDirection: 'row', marginVertical: 10,}}>
                <View
                style={{height: '100%', width: '15%', backgroundColor: '#83B29F', borderRadius: 10, marginLeft: '5%'}}>
                    
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '70%', }}>
                <View style={{ marginLeft: '4%' }}>
                    <Text style={{color: '#FFF', fontWeight: '500'}}>{props.song.title}</Text>
                    <Text style={{color: '#FFF', fontWeight: '500', marginTop: 3}}>03 : 10</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{fontSize: 40}}>·</Text>
                    <Text style={{fontSize: 40}}>·</Text>
                    <Text style={{fontSize: 40}}>·</Text>
                </View>
                </View>
            </View>
    );
}


export default SongListComponent;