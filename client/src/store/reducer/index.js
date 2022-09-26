import {
  filterForType,
  filterForCreated,
  filterForNameOrId,
  filterForAlf,
  filterForAtk,
} from "../../helpers/Filters";
import {
  GET_POKEMONS,
  POST_POKEMON,
  GET_POKE,
  GET_TYPES,
  FILTER_BY_TYPE,
  FILTER_BY_NAME,
  FILTER_BY_CREATED,
  FILTER_BY_ALF,
  FILTER_BY_ATK,
  GET_POKEMON_DETAIL,
  DELETE_POKEMON,
} from "../actions";

const initialState = {
  pokemons: [],
  allPokemons: [],
  filteredPokes: [],
  types: [],
  pokeDetail: [],
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
    case GET_TYPES:
      return {
        ...state,
        types: action.payload.data,
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
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        pokeDetail: action.payload,
      };
    case DELETE_POKEMON:
      return {
        ...state,
        pokeDetail: {},
      };
    default:
      return state;
  }
}
