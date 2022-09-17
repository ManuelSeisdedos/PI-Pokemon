export function filterForType(allPokemons, type) {
  return type === "all"
    ? allPokemons
    : allPokemons.filter((pokemon) => pokemon.type.includes(type) === true);
}

export function filterForName(allPokemons, name) {
  return allPokemons.filter((poke) => poke.name === name);
}

export function filterForCreated(allPokemons, id) {
  return allPokemons.filter((poke) => poke.id.includes("-"));
}
