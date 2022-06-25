import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${( props ) => props.theme.COLORS.BACKGROUND };
`;

export const Image = styled.Image`
   
    width:150px;
    height:150px;
`;