import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

function BugPage() {
  const [bugpokemon, setbugPokemon] = useState([]);
  const [bugsprites, setbugSprites] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type/7/")
      .then((response) => {
        setbugPokemon(response.data.pokemon.slice(0, 10));
      })
      .then(
        axios.get("https://pokeapi.co/api/v2/pokemon/16/").then((response) => {
          setbugSprites(response.data.sprites.front_default);
        })
      );
  }, []);
  console.log("bugs: ", bugpokemon);
  return (
    <Route path="/bug">
      <div>{bugpokemon.map((pokemon) => pokemon.pokemon.name + " ")}</div>
      <img src={bugsprites} alt="sprite" />
    </Route>
  );
}

export default BugPage;
