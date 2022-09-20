export default function PokemonCard({ name, image, types }) {
  name = name.charAt(0).toUpperCase().concat(name.slice(1));
  return (
    <div>
      <img src={image} alt="" />
      <h3> {name} </h3>
      {types.map((e, index) => (
        <h3 key={`type-${index}`}>{e}</h3>
      ))}
    </div>
  );
}
