import React from 'react';
import { TextInputProps} from 'react-native';

import logoImg from '../../assets/zuvviitransparent.png';

import { Container,Image,Title } from './styles';

export function Logo() {
  return (
    <Container>
        <Image 
            source={logoImg}
            resizeMode="contain" />
    </Container>
  );
}