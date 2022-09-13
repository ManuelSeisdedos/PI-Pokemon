import { useSelector,useDispatch } from "react-redux"
import {getPokemons} from '../store/actions'

export default function Pokemons (){
    const pokemons = useSelector((state) => state.pokemons)
    const dispatch = useDispatch()

    return <div> <h4>Soy Pokemons</h4>
        <div> imagen</div>
        <div> 
<button onClick={dispatch(getPokemons())}> GET POKES </button>
        </div>

    </div>
}