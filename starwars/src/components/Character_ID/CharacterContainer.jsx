import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterID from "./CharacterID";
import CharacterImage from "../Character_Image/CharacterImage";


export default function RnMContainer() {
    const [charc, setCharc] = useState('');
    const [charcID, setCharcID] = useState('');

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
            <CharacterImage image = {charc}/>       
        </div>
    )
}