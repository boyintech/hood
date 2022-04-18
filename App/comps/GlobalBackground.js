import {Image, View} from 'react-native';
import React from 'react';

export default GlobalBackground = (props) => {
	if(props.type == 'image')
    return (
        <Image 
        style = {{height: '100%', width: '100%', position: 'absolute'}}
        resizeMethod = 'resize'
        resizeMode = 'stretch'
        source = {require('../assets/Vinyl.png')}
        />
      );
  else
    return (
        <View 
        style = {{height: '100%', width: '100%', position: 'absolute', backgroundColor: props.color}}
        />  
      );
}