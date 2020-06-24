import React from "react";
import { useHistory } from "react-router-dom";
import updatePokemon from "../store/updatePokemon";
import { DetailCardWrapper, DetailWrapper, ContentHR } from "../styles/style";

export default function PokemonDetailsPage() {
  const { loading, poke, error } = updatePokemon();
  const history = useHistory();
  function handleClick() {
    history.goBack();
  }
  if (loading) return <div>loading..</div>;

  if (error) return <div>error...</div>;
  console.log("poke:", poke);
  return (
    <DetailWrapper>
      <button onClick={handleClick}>back</button>
      <DetailCardWrapper>
        <img src={poke?.sprites.front_default} alt={poke?.name} />
        <p>#{poke?.id}</p>
        <ContentHR style={{ margin: "0 0" }} />
        <h2>{poke?.name.charAt(0).toUpperCase() + poke?.name.slice(1)}</h2>
        <ContentHR style={{ margin: "0 0" }} />
        <p>{poke?.description}</p>
        <p>
          Height: {poke?.height / 10}m ✨✨✨ Weight: {poke?.weight / 10}kg
        </p>
      </DetailCardWrapper>
    </DetailWrapper>
  );
}
