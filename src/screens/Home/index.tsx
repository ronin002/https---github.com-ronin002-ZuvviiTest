import React from 'react';
import { View, Text } from 'react-native';

import { Container, Header, Content } from './styles';

import {Input} from '../../components/Input';
import {Card} from '../../components/Card';

import bannerImg from '../../assets/cover.png';

export function Home() {
    return (
        <>
        <Container>
            <Header source={bannerImg}>
                <Input placeholder="Search..."/>
            </Header>  
        </Container>
        
        <Content>
            <Card/>
        </Content>
        </>
    );
}