/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_POKEMON_START, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE } from './store';
import Axios from 'axios';

const fetchPokemon = () => {
  const { loading, pokemon, error } = useSelector((store) => store);
  const dispatch = useDispatch();

  React.useEffect(() => {
    //  ! First case in reducer
    if (!loading && !pokemon) dispatch({ type: FETCH_POKEMON_START });

    // ! ONLY call api if you need to
    if (!loading && !pokemon && !error)
      Axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then((res) => {
          dispatch({ type: FETCH_POKEMON_SUCCESS, payload: res.data.results });
        })
        .catch((err) => {
          dispatch({ type: FETCH_POKEMON_FAILURE });
        });
  }, [dispatch, error, loading, pokemon]);

  return { loading, pokemon, error };
};

export default fetchPokemon;
