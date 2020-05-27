import React, { useState, useEffect } from "react";
import "98.css";
import styled from "styled-components";
import "./styles/reset.css";
import axios from "axios";

const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
`;

const WelcomeDiv = styled.div`
  height: 10rem;
  width: 60rem;
  display: inline-block;
  font-size: 2rem;
  background: #c8c8c8;
`;

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [pokemon, setPokemon] = useState({});

  const pokeId = () => {
    const min = Math.ceil(1);
    const max = Math.floor(151);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + pokeId())
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => {
        console.log("error!", error);
      });
  }, []);

  return (
    <MainWrapper>
      <header>
        <WelcomeDiv className="window">
          <div class="title-bar">
            <div class="title-bar-text">xoxo</div>
            <div class="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div class="window-body">
            <p>Welcome to Poke 98!</p>
          </div>
        </WelcomeDiv>
      </header>
      <section className="pokemon">
        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            pokemon.id +
            ".png"
          }
          alt="Pokemon Sprite"
        />
        <h3>{pokemon.name}</h3>
        {/* put search form here */}
      </section>
    </MainWrapper>
  );
}

export default App;
