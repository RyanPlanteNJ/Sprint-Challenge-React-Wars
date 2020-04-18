import React from 'react';
import styled from 'styled-components';

const Name = styled.h2`
    font-size: 30px;
    color: #6c68ce;
    text-shadow: 3px 2px #000000;
`;


export default function CharacterName(props){
    return (
        <Name>
            {props.name}
        </Name>
    )
}