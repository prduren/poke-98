import React, { useState, useEffect } from "react";
import axios from "axios";
import "98.css";
import { CardWrapper } from "../styles/style";

// get a random number between 1 and 151
const pokeId = () => {
  const min = Math.ceil(1);
  const max = Math.floor(151);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function Card() {
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
    <CardWrapper>
      <section className="pokemonCard">
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
    </CardWrapper>
  );
}

export default Card;
