import styled from 'styled-components/native';
import {RFPercentage} from 'react-native-responsive-fontsize';


export const Container = styled.View`
    align-items:center;
    width: 180px;
    
    height:250px;

    padding: 16px;
    
    background-color: ${( props ) => props.theme.COLORS.PRIMARY_900 };
    color:${( props ) => props.theme.COLORS.TEXT };

    margin: 0 10px;
    border-radius: 10px;
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
