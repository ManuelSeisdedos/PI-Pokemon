export function filterForType(allPokemons, type) {
  return type === "all"
    ? allPokemons
    : allPokemons.filter((pokemon) => pokemon.type.includes(type) === true);
}

export function filterForNameOrId(allPokemons, name) {
  const filtradoPorId = allPokemons.filter((poke) => poke.id == name);
  const filtradoPorNombre = allPokemons.filter(
    (poke) => poke.name.toLowerCase() === name.toLowerCase()
  );
  const pokeFiltrado = filtradoPorId.concat(filtradoPorNombre);
  return pokeFiltrado ? pokeFiltrado : [];
}

export function filterForCreated(allPokemons, payload) {
  console.log("allpokes", allPokemons);
  if (payload === "pokemonexistente") {
    const result = allPokemons.map((poke) => {
      if (poke.createdInDb) {
        result.push(poke);
      }
    });

    console.log("RESULT", result);
    return result;
  }
  if (payload === "pokemoncreado") {
    return allPokemons.filter((poke) => poke.hasOwnProperty("createdInDb"));
  }
}
