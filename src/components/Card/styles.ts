import styled from 'styled-components/native';
import {RFPercentage} from 'react-native-responsive-fontsize';


export const Container = styled.View`

    background-color: ${( props ) => props.theme.COLORS.BACKGROUND };
    color:${( props ) => props.theme.COLORS.ZUVVII };
`;

export const Image = styled.Image`
    margin-top:-50px;
    width:150px;
    height:150px;
`;

export const Title = styled.Text`
    color:${( props ) => props.theme.COLORS.BACKGROUND };
    font-family:${( props ) => props.theme.FONTS.MEDIUM };
    font-size:${RFPercentage(2)}px;
`;
