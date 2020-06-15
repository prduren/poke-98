// to do
// fix random number differences
// figure out how to do the second call for the pokemon description
// dangerously set html
// map over and display in card.js, reference old projects
import React, { useState, useEffect } from "react";
import "98.css";
import styled from "styled-components";
import "./styles/reset.css";
import axios from "axios";

const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
  align-content: center;
`;

const WelcomeDiv = styled.div`
  height: 10rem;
  width: 60rem;
  display: inline-block;
  font-size: 2rem;
  background: #c8c8c8;
`;

const ContentWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;

// get a random number between 1 and 151
const pokeId = () => {
  const min = Math.ceil(1);
  const max = Math.floor(151);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function App() {
  const [description, setDescription] = useState("");
  const [pokemon, setPokemon] = useState({});

  // this call is for the pokemon name
  useEffect(() => {
    const pokemonId = pokeId();
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + pokemonId)
      .then((response) => {
        setPokemon(response.data);
        axios
          .get("https://pokeapi.co/api/v2/pokemon-species/" + pokemonId)
          .then((response) => {
            const desc = response.data.flavor_text_entries
              .filter((obj) => obj.language.name === "en")
              .filter((obj) => obj.version.name === "yellow");
            console.log("desc: ", desc);
            setDescription(desc[0].flavor_text.replace("\u000c", " "));
            console.log(response.data);
          })
          .catch((error) => {
            console.log("error 2! here it is: ", error);
          });
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error 1! here it is: ", error);
      });
  }, []);

  return (
    <MainWrapper>
      <ContentWrapper>
        <header>
          <WelcomeDiv className="window">
            <div className="title-bar">
              <div className="title-bar-text">xoxo</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
              </div>
            </div>
            <div className="window-body">
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
          <h3>#{pokemon.id}</h3>
          <h3>{pokemon.name}</h3>
          <h3>{description}</h3>
          {/* put search form here */}
        </section>
      </ContentWrapper>
    </MainWrapper>
  );
}

export default App;
