import React, {useState, useEffect} from 'react';
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
  PermissionsAndroid,
  Image,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalBackground from './GlobalBackground.js';
import {connect, useSelector, useDispatch} from 'react-redux';
import RNFS from 'react-native-fs';


const scanDirs = async () => {
  let MusicData = 
  await RNFS.readDir(RNFS.ExternalStorageDirectoryPath)
      .then((res) => {
          let tempData = new Array(0);
          res.map((dir, i) => {
            let temp = new Array(0);
            if(dir.isDirectory()) 
              tempData.push(scanFile(dir.path, dir.name));
            // tempData.push(temp);
         })
          return Promise.all(tempData);
      })
      .catch((err) => {
        console.log(err);
        return null;
      })
      return MusicData;
}

const scanFile = async (path, name) => {
  const DirData = {dirName: name, 
    data: await RNFS.readDir(path)
      .then((res) => {
        let MusicFiles = [];
        res.map((content, i) => {
          let firspos = 0;
          if(content.isFile()){
            for(let i=content.name.length-1 ; i!=0 ; i--){
                if(content.name[i] == '.'){
                  firspos = i;
                  break;
                }
            } 
            let format = content.name.slice(firspos, content.name.length);
              if(format === ".mp3") 
                MusicFiles.push({name: content.name, path: 'file://'+content.path});
          }
        })
        return Promise.all(MusicFiles);
      })
      .catch((err) => {console.log(err); return null})
    };
      return DirData;
}

const WelcomePage = (props) => {
  return (
     <View style={{height:'100%', width: '100%',}}>
      <GlobalBackground type={'image'} />
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
            <TouchableOpacity onPress={() => 
              props.inherit.navigation.navigate("Home")
            } style={{justifyContent: 'center',
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
  )
};


const LoadingPage = () => {
  return(
    <View>
      <ActivityIndicator />
    </View>
    );
}

const Main = (props) => {
  const dispatch = useDispatch();
  const [data, updateData] = useState();

  const tempFunction = async() => {    
    dispatch({type: 'ADD_SONGS', payload: await scanDirs()});
    setisLoaded(true);
  }

  useEffect(() => {
      tempFunction();
  }, []);
  
  const rwidth = Dimensions.get('window').width;
  const [isLoaded, setisLoaded] = useState(false);
  if(isLoaded) return <WelcomePage inherit={props} />
  else return <LoadingPage />;
};

export default (Main);
