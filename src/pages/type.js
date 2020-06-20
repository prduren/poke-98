import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const PokemonTypeList = () => {
  const { type } = useParams();

  const { loading, pokemon, error } = useSelector((state) => state);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;

  return (
    <ul>
      {pokemon &&
        pokemon
          .filter((poke) => poke.types[0].type.name === type)
          .map((poke) => (
            <li key={poke.name}>
              <div>{poke.name}</div>
              <img src={poke.sprites.front_default} alt={poke.name} />
            </li>
          ))}
    </ul>
  );
};

export default PokemonTypeList;
