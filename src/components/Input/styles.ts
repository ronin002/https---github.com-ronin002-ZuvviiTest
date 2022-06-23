import styled from 'styled-components/native';

export const Container = styled.TextInput`
    width:100%;
    height:54px;
    padding: 16px;
    border: 1px solid #cecece;
    background-color: ${( props ) => props.theme.COLORS.BACKGROUND };
    color:${( props ) => props.theme.COLORS.TEXT };

`;
