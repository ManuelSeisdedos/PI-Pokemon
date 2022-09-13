import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import {getPokemons} from '../store/actions'
import PokemonCard from "./PokemonCard"

export default function Home (){
    const pokemons = useSelector(state => state.pokemons)
    const dispatch = useDispatch()
    useEffect(() =>{
         dispatch(getPokemons());
    }, [])
    console.log(pokemons)

    return <div> 
        <h4>Soy Pokemons</h4>
        {pokemons.length >= 1 &&
        pokemons.map((p) => <PokemonCard name={p.name} image={p.image} types={p.type}/>)
        }
        <button onClick={()=>dispatch(getPokemons())}> GET POKES </button>
    </div>
}