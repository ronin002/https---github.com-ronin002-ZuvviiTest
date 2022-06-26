import React from 'react';
import { View, FlatList,ScrollView,Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//import {Card} from '@ui-kitten/components';
//import VideoPlayer from 'react-native-video-player';
import {Video, AVPlaybackStatus} from 'expo-av';
//import Video from 'react-native-video';

import { Logo } from '../../components/Logo';
import { Container  } from './styles';
import { Center } from 'native-base';

export function Home() {

  /*
  function imgPath(game){
    let initialPath = '../../assets/';
    let resultado = initialPath + game + 'png';
    return require('../../assets/wow.png');
  }
  */

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const listVideos=[
    {
      id:1,
      id_author: 1,
      //name:'https:drive.google.com/file/d/1CqxDhhdkorf9Ye802o0PkuzntqBVpwuH/view?usp=sharing',
      name:'https://gdurl.com/wUFJ',
      game: 'League of Legends',
      title: 'Arcane Awesome',
      thumb: 'leagueoflegends',
      like_counter: 0,
    },
    {
      id:2,
      id_author: 2,
      //name:'https:drive.google.com/file/d/1GvTY2OU_Pht9S3a42_HQj8swLmRXMHLf/view?usp=sharing',
      name:'https://gdurl.com/o0qW',
      game: 'Shadow of Colossus',
      title: 'Colossus fight',
      thumb: 'shadowofcolossus',
      like_counter: 0,
    },
    {
      id:3,
      id_author: 2,
      //name:'https://drive.google.com/file/d/1_wQH9XmBd-M9i8Mqml_N9xKTyackzMTh/view?usp=sharing',
      name: 'https://gdurl.com/UsWa',
      game: 'Shadow of Colossus',
      title: 'Colossus game',
      thumb: 'shadowofcolossus',
      like_counter: 0,
    },
    {
      id:4,
      id_author: 2,
      //name:'https://drive.google.com/file/d/12j7SunSV5WeZU3Njgmu63TbM0aQWNs0W/view?usp=sharing',
      name: 'https://gdurl.com/kjWX',
      game: 'Shadow of Colossus',
      title: 'Colossus gameplay',
      thumb: 'shadowofcolossus',
      like_counter: 0,
    },
    {
      id:5,
      id_author: 3,
      //name:'https:drive.google.com/file/d/1RCIhZVcJFfJn-9nF9uywbzT8uheB56Sg/view?usp=sharing',
      name: 'https://gdurl.com/Em4M',
      game: 'Counter Strike',
      title: 'Chikens of CS',
      thumb: 'cs',
      like_counter: 0,
    },
    {
      id:6,
      id_author: 3,
      //name:'https:drive.google.com/file/d/1kzGuOj-n4LNofUwzUwJvL-TMKIhKFUQh/view?usp=sharing',
      name: 'https://gdurl.com/flY6',
      game: 'Counter Strike',
      title: 'CS',
      thumb: 'cs',
      like_counter: 0,
    },
    {
      id:7,
      id_author: 3,
      //name:'https:drive.google.com/file/d/1jsJlFN9z7st0wDzUdNEISD_Y6ciN2_rZ/view?usp=sharing',
      name: 'https://gdurl.com/Ek6C',
      game: 'Counter Strike',
      title: 'CS Shorts',
      thumb: 'cs',
      like_counter: 0,
    },
    {
      id:8,
      id_author: 3,
      //name:'https:drive.google.com/file/d/1a-sQn1ANeZwshkE5zBhdhwoLpmzJ7TTs/view?usp=sharing',
      name: 'https://gdurl.com/6faD',
      game: 'Counter Strike',
      title: 'CS leasson',
      thumb: 'cs',
      like_counter: 0,
    },
    {
      id:9,
      id_author: 4,
      //name:'https:drive.google.com/file/d/1nE1zU-6D2l0LtKiZZScT2POphhWMawQi/view?usp=sharing',
      name: 'https://gdurl.com/QYXh',
      game: 'Fall Guys',
      title: 'Awesome play',
      thumb: 'fallguys',
      like_counter: 0,
    },
    {
      id:10,
      id_author: 4,
      //name:'https:drive.google.com/file/d/1_o1QmdLpL_aI0wcKCcE8wxGPCwc0teXL/view?usp=sharing',
      name: 'https://gdurl.com/qTsI',
      game: 'Fall Guys',
      title: 'Fall guys play',
      thumb: 'fallguys',
      like_counter: 0,
    }
    
  ];

  return (

     <SafeAreaView>
       <Logo/>
       <FlatList data={listVideos}
         keyExtractor={(item,index)=>`${index}`}
         initialNumToRender={10}
         renderItem={({item,index})=>{
           return(
             <ScrollView style={{marginTop:10}}>
               <View>
     
                  <Video
                    ref={video}
                    style={{ 
                      alignSelf: 'center',
                      width: 420, 
                      height: 200, 
                      flex: 1, 
                      zIndex: 1 
                    }}
                    source={{
                      uri: item.name,
                      
                    }}
                    //https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4
                    useNativeControls
                    //resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                  />
                  
                 <Text>{item.title}</Text>
                 



               </View>
             </ScrollView>
           )
         }}
       />
     </SafeAreaView>

    
      // <Container>
      //     <Logo/>
      // </Container>
 
   
  );
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});