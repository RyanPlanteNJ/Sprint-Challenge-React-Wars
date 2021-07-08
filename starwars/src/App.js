import React from 'react';
import './App.css';
import styled from "styled-components";
import CharacterContainer from "./components/Character_ID/CharacterContainer"

  const Container = styled.div`
     max-width: 1024px;
     margin: auto;
     padding: 30px;
     text-align: center
 `; 
function App() {

  return (
    <Container className="App">
      <h1 className="Header">Rick & Morty Characters</h1>
      <CharacterContainer />
    </Container>
  );
}

export default App;
