export function PokemonForm() {
  const [name, setName] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <input type="string" placeholder="Poke Name" value={234} onChange={234} />
      <button>Buscar</button>
    </form>
  );
}
