import axios from "axios";
const LOCAL = "http://localhost:3001/";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKE = "GET_POKE";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_CREATED = "FILTER_BY_CREATED";

export function getPokemons() {
  return async (dispatch) => {
    try {
      const pokes = await axios.get(`${LOCAL}pokemons`);
      return dispatch({
        type: GET_POKEMONS,
        payload: pokes.data,
      });
    } catch (e) {
      console.log(e);
      return dispatch({ type: GET_POKEMONS, payload: [] });
    }
  };
}

export function getOnePoke(name) {
  console.log(name);
  return async (dispatch) => {
    try {
      const poke = await axios.get(`${LOCAL}pokemons?name=${name}`);
      return dispatch({ type: GET_POKE, payload: poke.data });
    } catch (e) {
      console.log(e);
      return dispatch({ type: GET_POKE, payload: [] });
    }
  };
}

export function filterPokemonByType(payload) {
  return {
    type: FILTER_BY_TYPE,
    payload,
  };
}

export function filteredByName(payload) {
  return {
    type: FILTER_BY_NAME,
    payload,
  };
}

export function filterByCreated(payload) {
  console.log("PAYLOAD ACTIONS ", payload);
  return {
    type: FILTER_BY_CREATED,
    payload,
  };
}
