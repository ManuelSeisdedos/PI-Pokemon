import { GET_POKEMONS } from "../actions";

const initialState = {
    pokemons: [],
    filteredPokes: []
}

export default function reducer (state = initialState, action) {
     switch(action.type){
        case GET_POKEMONS: 
            return {
                ...state,
                characters: action.payload
            }
            default: return state
     }
}