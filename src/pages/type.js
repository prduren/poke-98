import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { TypeCardWrapper } from "../styles/style";

export const PokemonTypeList = () => {
  const { type } = useParams();

  const { loading, pokemon, error } = useSelector((state) => state);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;

  return (
    <TypeCardWrapper>
      {pokemon &&
        pokemon
          .filter((poke) => poke.types[0].type.name === type)
          .map((poke) => (
            <div className="card" key={poke.name}>
              <img src={poke.sprites.front_default} alt={poke.name} />
              <p>#{poke.id}</p>
              <div className="name">
                {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
              </div>
              <div className="weight">{poke.weight / 10} kg</div>
            </div>
          ))}
    </TypeCardWrapper>
  );
};

export default PokemonTypeList;
