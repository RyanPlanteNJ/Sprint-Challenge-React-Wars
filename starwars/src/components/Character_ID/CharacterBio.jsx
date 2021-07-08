import React from 'react';
import styled from 'styled-components';


const Species = styled.h3`
    text-align: center;
    font-size: 30px;
    line-height: 2rem;
    margin-top: 10px;
    color: #6c68ce;
    text-shadow: 3px 2px #000000;
`;

const Status = styled.h3`
  text-align: center;
  font-size: 30px;
  line-height: 2rem;
  margin-top: 10px;
  color: #6c68ce;
  text-shadow: 3px 2px #000000;
`;

export default function CharacterBio(props) {
    return (
        <div>
            <Species>
               Species: {props.species}
            </Species>
            <Status>
                Status: {props.status}
            </Status>
        </div>
    );
}