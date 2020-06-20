import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

const initialState = { pokemon: undefined, loading: false, error: false };

export const FETCH_POKEMON_START = 'FETCH_POKEMON_START';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMON_START:
      return { ...state, loading: true };
    case FETCH_POKEMON_SUCCESS:
      return { ...state, pokemon: action.payload, loading: false };
    case FETCH_POKEMON_FAILURE:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(
  reducer,
  compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : (f) => f)
);

export default store;
