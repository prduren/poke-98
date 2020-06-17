import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

function FlyingPage() {
  const [pokemon, setPokemon] = useState([]);
  const [sprites, setSprites] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type/3/")
      .then((response) => {
        setPokemon(response.data.pokemon.slice(0, 19));
      })
      .then(
        axios.get("https://pokeapi.co/api/v2/pokemon/16/").then((response) => {
          setSprites(response.data.sprites.front_default);
        })
      );
  }, []);

  return (
    <Route path="/flying">
      <div>{pokemon.map((pokemon) => pokemon.pokemon.name + " ")}</div>
      <img src={sprites} alt="sprite" />
    </Route>
  );
}

export default FlyingPage;
