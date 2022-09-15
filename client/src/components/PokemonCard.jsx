export default function PokemonCard({ name, image, types }) {
  return (
    <div>
      <img src={image} alt="" />
      <h3> {name} </h3>
      {types.map((e) => (
        <h3>{e}</h3>
      ))}
    </div>
  );
}
