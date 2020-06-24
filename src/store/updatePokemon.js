/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_POKEMON_DETAILS_START,
  FETCH_POKEMON_DETAILS_SUCCESS,
  FETCH_POKEMON_DETAILS_FAILURE,
} from "./store";
import Axios from "axios";
import { useParams } from "react-router-dom";
const updatePokemon = () => {
  const { id } = useParams();

  const { loading, pokemon, error } = useSelector((store) => store);

  const poke = useSelector((store) =>
    store?.pokemon?.find((pok) => pok.id === Number(id))
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!loading && pokemon && !poke) {
      dispatch({ type: FETCH_POKEMON_DETAILS_FAILURE });
    }
    // const poke = pokemon?
    if (!loading && pokemon && poke && !poke.hasDetails) {
      dispatch({ type: FETCH_POKEMON_DETAILS_START });

      Axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(
        (res) => {
          let desc = res.data.flavor_text_entries
            .filter((obj) => obj.language.name === "en")
            .filter((obj) => obj.version.name === "yellow")[0]
            .flavor_text.replace("\u000c", " ");

          dispatch({
            type: FETCH_POKEMON_DETAILS_SUCCESS,
            payload: { id, ...res.data, description: desc },
          });
        }
      );
    }
  }, [dispatch, id, loading, poke, pokemon]);

  return { loading, poke, error };
};

export default updatePokemon;
