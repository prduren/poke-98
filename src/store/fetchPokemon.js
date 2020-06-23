/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
} from "./store";
import Axios from "axios";

const fetchPokemon = () => {
  const { loading, pokemon, error } = useSelector((store) => store);
  const dispatch = useDispatch();

  React.useEffect(() => {
    //  ! First case in reducer
    if (!loading && !pokemon) dispatch({ type: FETCH_POKEMON_START });

    // ! ONLY call api if you need to
    if (!loading && !pokemon && !error)
      Axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(async (res) => {
          const pokemon = await Axios.all(
            res.data.results.map(getPokemonDetails)
          );

          dispatch({ type: FETCH_POKEMON_SUCCESS, payload: pokemon });
        })
        .catch((err) => {
          dispatch({ type: FETCH_POKEMON_FAILURE });
        });
  }, [dispatch, error, loading, pokemon]);

  return { loading, pokemon, error };
};

async function getPokemonDetails({ url, name }) {
  return await Axios.get(url).then((res) => ({ name, ...res.data }));
}

export default fetchPokemon;
