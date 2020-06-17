import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

function GroundPage() {
  const [pokemon, setPokemon] = useState([]);
  const [sprites, setSprites] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type/5/")
      .then((response) => {
        setPokemon(response.data.pokemon.slice(0, 14));
      })
      .then(
        axios.get("https://pokeapi.co/api/v2/pokemon/14/").then((response) => {
          setSprites(response.data.sprites.front_default);
        })
      );
  }, []);

  return (
    <Route path="/ground">
      <div>{pokemon.map((pokemon) => pokemon.pokemon.name + " ")}</div>
      <img src={sprites} alt="sprite" />
    </Route>
  );
}

export default GroundPage;
