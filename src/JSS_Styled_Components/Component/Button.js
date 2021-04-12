import React from 'react'
import styled from 'styled-components'


export const Button = styled.button`
color: white;
background-color: green;
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
        color: black;
    }
`