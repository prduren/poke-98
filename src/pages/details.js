import React from "react";
import { useHistory } from "react-router-dom";
import updatePokemon from "../store/updatePokemon";
export default function PokemonDetailsPage() {
  const { loading, poke, error } = updatePokemon();
  const history = useHistory();
  function handleClick() {
    history.goBack();
  }
  if (loading) return <div>loading..</div>;

  if (error) return <div>error...</div>;
  return (
    <div>
      <button onClick={handleClick}>back</button>
      <div>{poke && poke.description}</div>
    </div>
  );
}
