import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterID from "./CharacterID";
import CharacterImage from "../Character_Image/CharacterImage";
import CharacterName from "../Character Name/CharacterName";
import CharacterBio from "./CharacterBio";


export default function RnMContainer() {
    const [charc, setCharc] = useState('1');
    const [charcID, setCharcID] = useState('1');

    const charcSubmit = e => {
        e.preventDefault();
        setCharcID(document.querySelector("#id").value);
    };

    useEffect(()=>{
        axios
           .get(`https://rickandmortyapi.com/api/character/${charcID}`)
           .then(response => {
               console.log(response.data);
               setCharc(response.data);
           }); 
    },[charcID]);

    return(
        <div className = "charcContainer">
            <CharacterID charcSubmit = {charcSubmit}/>
            <CharacterName name = {charc.name}/>
            <CharacterImage image = {charc}/>
            <CharacterBio species = {charc.species} status ={charc.status}/>   
        </div>
    )
}