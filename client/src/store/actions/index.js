import axios from "axios";
const LOCAL = "http://localhost:3001/";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKE = "GET_POKE";

console.log("LOCAL__>", LOCAL);

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
