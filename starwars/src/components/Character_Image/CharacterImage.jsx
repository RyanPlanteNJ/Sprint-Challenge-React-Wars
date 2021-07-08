// Write your Character component here
import React from "react";
import styled from "styled-components";


const ImageContainer = styled.div`
    width:100%;
`;

const ImageSize = styled.img`
    margin-top: 10px;
    width:30%;
`;

export default function CharacterImage(props) {
    const { image } = props;
    return(
        <ImageContainer>
            <ImageSize src = {image.image} alt = {image.desc}/>
        </ImageContainer>
    );
}