import { getTypesPokemon, newPokemon } from "../../helpers/Filters";
import axios from "axios";

const LOCAL = process.env.URL_BACK || "https://pi-pokemon-back.vercel.app/";


export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKE = "GET_POKE";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_CREATED = "FILTER_BY_CREATED";
export const FILTER_BY_ALF = "FILTER_BY_ALF";
export const FILTER_BY_ATK = "FILTER_BY_ATK";
export const POST_POKEMON = "POST_POKEMON";
export const DELETE_POKEMON = "DELETE_POKEMON";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const GET_TYPES = "GET_TYPES";

export function getPokemons() {
  return async (dispatch) => {
    try {
      const pokes = await axios.get(`${LOCAL}pokemons`);
      console.log(pokes.data)
      return dispatch({
        type: GET_POKEMONS,
        payload: pokes.data,
      });
    } catch (e) {
      
      return dispatch({ type: GET_POKEMONS, payload: [] });
    }
  };
}

export function getOnePoke(name) {
  return async (dispatch) => {
    try {
      const poke = await axios.get(`${LOCAL}pokemons?name=${name}`);
      return dispatch({ type: GET_POKE, payload: poke.data });
    } catch (e) {
      
      return dispatch({ type: GET_POKE, payload: [] });
    }
  };
}

export function getPokemonDetail(id) {
  return async (dispatch) => {
    try {
      const poke = await axios.get(`${LOCAL}pokemons/${id}`);

      return dispatch({ type: GET_POKEMON_DETAIL, payload: poke.data });
    } catch (e) {
      
      return dispatch({ type: GET_POKEMON_DETAIL, payload: {} });
    }
  };
}

export function getTypes() {
  return {
    type: GET_TYPES,
    payload: getTypesPokemon(),
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
  return {
    type: FILTER_BY_CREATED,
    payload,
  };
}

export function filteredByAlf(payload) {
  return {
    type: FILTER_BY_ALF,
    payload,
  };
}

export function filterByAtk(payload) {
  return {
    type: FILTER_BY_ATK,
    payload,
  };
}

export function postPokemon(input) {
  return {
    type: POST_POKEMON,
    payload: newPokemon(" ", input),
  };
}

export function deletePoke() {
  return {
    type: DELETE_POKEMON,
    payload: {},
  };
}
