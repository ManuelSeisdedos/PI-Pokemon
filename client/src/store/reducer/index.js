import { GET_POKEMONS, POST_POKEMON, GET_TYPES } from "../actions";

const initialState = {
    pokemons: [],
    filteredPokes: [],
    types: []
}

export default function reducer (state = initialState, action) {
     switch(action.type){
        case GET_POKEMONS: 
            return {
                ...state,
                pokemons: action.payload
            }
        case GET_POKE: 

        return {
            ...state,
            filteredPokes: action.payload
        }

        case GET_TYPES:
            return {
                ...state, 
                types: action.payload
            }

        case POST_POKEMON: 
            return {

        }
        default: return state
     }
}