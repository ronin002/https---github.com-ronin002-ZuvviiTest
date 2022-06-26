import React from 'react';
import { View, Image, TextInputProps, StyleSheet} from 'react-native';

import logoImg from '../../assets/zuvviitransparent.png';

//import { Container,Image,Title } from './styles';
const width_img_proportion = '60%';
const width__view_proportion = '100%';

export function Logo() {
  return (
    <View style={styles.container}>
        <Image 
            source={logoImg}
            style={styles.image}
            resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width__view_proportion,
    paddingTop:30,
    paddingLeft:20,
    paddingBottom:10,
    height:120,

    //flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width:width_img_proportion,
    height:100,

    //flex: 1,
    backgroundColor: '#000',
  
  },
})