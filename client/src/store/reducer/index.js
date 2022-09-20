import {
  filterForType,
  filterForCreated,
  filterForNameOrId,
  filterForAlf,
  filterForAtk,
  newPokemon,
} from "../../helpers/Filters";
import {
  GET_POKEMONS,
  POST_POKEMON,
  GET_TYPES,
  GET_POKE,
  FILTER_BY_TYPE,
  FILTER_BY_NAME,
  FILTER_BY_CREATED,
  FILTER_BY_ALF,
  FILTER_BY_ATK,
} from "../actions";

const initialState = {
  pokemons: [],
  allPokemons: [],
  filteredPokes: [],
  types: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };
    case GET_POKE:
      return {
        ...state,
        filteredPokes: action.payload,
      };

    case FILTER_BY_TYPE:
      return {
        ...state,
        pokemons: filterForType(state.allPokemons, action.payload),
      };

    case FILTER_BY_NAME:
      return {
        ...state,
        pokemons: filterForNameOrId(state.allPokemons, action.payload),
      };
    case FILTER_BY_CREATED:
      return {
        ...state,
        pokemons: filterForCreated(state.allPokemons, action.payload),
      };

    case FILTER_BY_ALF:
      return {
        ...state,
        pokemons: filterForAlf(state.allPokemons, action.payload),
      };
    case FILTER_BY_ATK:
      return {
        ...state,

        pokemons: filterForAtk(state.allPokemons, action.payload),
      };
    case POST_POKEMON:
      return {
        ...state,
      };
    default:
      return state;
  }
}
