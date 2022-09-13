export default function PokemonCard ({name,image,types}) {
    return (
     <div>
    <h1> {name} </h1>
    <img src={image} alt=""/>
    {types.map(e =><h3>{e}</h3>)}
    </div>   
    )
}