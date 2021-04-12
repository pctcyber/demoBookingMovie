import React from 'react'
import styled from 'styled-components'


export const Button = styled.button`
color: ${props => props.primary ? 'green': 'orange'};
background-color: ${props => props.primary ? 'pink': "blue"};
font-size: 25px;
padding: 10px;
margin: 49px;
border: none;
border-radius: 8px;
display: inline-block;
    &:hover{
    color: yellow;
    background-color: blue;
    opacity: 0.5;
    transition: all 2s;
    };

    &.button_style{
        color: green;
    }
`
// tính kế thừa
export const TomatoButton = styled(Button)`

background-color: black;
color:palevioletred;
&:hover{
    background-color: grey;
    color: black
}
`