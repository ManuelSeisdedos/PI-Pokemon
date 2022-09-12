import axios from 'axios'
const {LOCAL} = process.env
export const GET_POKEMONS = 'GET_POKEMONS'



export function getPokemons(name,id){
    return function(dispatch){
        axios.get(`${LOCAL}pokemons`)
        .then((pokes) => {
            dispatch({
                type: GET_POKEMONS,
                payload: pokes
            })
        })
}}