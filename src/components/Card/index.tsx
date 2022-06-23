import React from 'react';
import { TextInputProps} from 'react-native';

import unitedImg from '../../assets/united.png';

import { Container,Image,Title } from './styles';

export function Card() {
  return (
    <Container>
        <Image 
            source={unitedImg}
            resizeMode="contain" />
        <Title>Manchester United</Title>
    </Container>
  );
}