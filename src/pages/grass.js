import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

function GrassPage() {
  const [pokemon, setPokemon] = useState([]);
  const [sprites, setSprites] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type/12/")
      .then((response) => {
        setPokemon(response.data.pokemon.slice(0, 14));
      })
      .then(
        axios.get("https://pokeapi.co/api/v2/pokemon/16/").then((response) => {
          setSprites(response.data.sprites.front_default);
        })
      );
  }, []);

  return (
    <Route path="/grass">
      <div>{pokemon.map((pokemon) => pokemon.pokemon.name + " ")}</div>
      <img src={sprites} alt="sprite" />
    </Route>
  );
}

export default GrassPage;
