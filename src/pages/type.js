import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { TypeCardWrapper, ContentHR } from "../styles/style";

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
            <div className="shadowDiv">
              <div className="card" key={poke.name}>
                <img src={poke.sprites.front_default} alt={poke.name} />
                <p>#{poke.id}</p>
                <ContentHR />
                <div className="name">
                  <Link to={`/type/${type}/${poke.id}`}>
                    {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                  </Link>
                </div>
                <ContentHR />

                <div className="weight">{poke.weight / 10} kg</div>
              </div>
            </div>
          ))}
    </TypeCardWrapper>
  );
};

export default PokemonTypeList;
