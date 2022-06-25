import styled from 'styled-components/native';
import {RFPercentage} from 'react-native-responsive-fontsize';


export const Container = styled.View`
    width:100%;
    height: 200px;

    color:${( props ) => props.theme.COLORS.ZUVVII };
    justify-content:center;
    align-items:center;

`;

export const Image = styled.Image`
    
    width:200px;
    height:150px;
`;

export const Title = styled.Text`
    color:${( props ) => props.theme.COLORS.BACKGROUND };
    font-family:${( props ) => props.theme.FONTS.MEDIUM };
    font-size:${RFPercentage(2)}px;
`;
