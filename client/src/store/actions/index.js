import axios from 'axios'
const {LOCAL} = process.env
export const GET_POKEMONS = 'GET_POKEMONS'


export function getPokemons(){
    return function(dispatch){
       try {
        axios.get(`${LOCAL}pokemons`)
        .then((pokes) => {
            dispatch({
                type: GET_POKEMONS,
                payload: pokes.data
            })
        })

       } catch (error) {
            console.log(error)
       }

}} 