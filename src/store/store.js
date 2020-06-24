import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

const initialState = { pokemon: undefined, loading: false, error: false };

export const FETCH_POKEMON_START = "FETCH_POKEMON_START";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";

export const FETCH_POKEMON_DETAILS_START = "FETCH_POKEMON_DETAILS_START";
export const FETCH_POKEMON_DETAILS_SUCCESS = "FETCH_POKEMON_DETAILS_SUCCESS";
export const FETCH_POKEMON_DETAILS_FAILURE = "FETCH_POKEMON_DETAILS_FAILURE";

function reducer(state = initialState, action) {
  switch (action.type) {
    // Fetch pokemon
    case FETCH_POKEMON_START:
      return { ...state, loading: true };
    case FETCH_POKEMON_SUCCESS:
      return { ...state, pokemon: action.payload, loading: false };
    case FETCH_POKEMON_FAILURE:
      return { ...state, error: true, loading: false };
    // Update pokemon
    case FETCH_POKEMON_DETAILS_START:
      return { ...state, loading: true };

    case FETCH_POKEMON_DETAILS_SUCCESS:
      const pokeIndex = state.pokemon.findIndex(
        (poke) => poke.id === action.payload.id
      );

      const updatedPoke = {
        hasDetails: true,
        ...state.pokemon[pokeIndex],
        ...action.payload,
      };

      let updatedPokemon = state.pokemon;

      updatedPokemon[pokeIndex] = updatedPoke;

      return { ...state, pokemon: updatedPokemon, loading: false };

    case FETCH_POKEMON_DETAILS_FAILURE:
      return { ...state, error: true };

    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

export default store;
