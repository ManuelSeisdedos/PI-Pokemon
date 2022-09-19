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
  const filtradoPorExistente = allPokemons.filter(
    (poke) => poke.created === false
  );
  const filtradoPorCreado = allPokemons.filter(
    (poke) => poke.created === "true"
  );

  if (payload === "all") {
    return allPokemons;
  } else if (payload === "pokemonexistente") {
    return filtradoPorExistente;
  } else if (payload === "pokemoncreado") {
    return filtradoPorCreado;
  }

  return [];
}

const ordenedAttackAsc = (pokemonOrdenar) =>
  pokemonOrdenar.sort((a, b) => {
    // a.name = a.name.toLowerCase();
    // b.name = b.name.toLowerCase();
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    return 0;
  });

const ordenedAttackDesc = (pokemonOrdenar) =>
  pokemonOrdenar.sort((a, b) => {
    // a.name = a.name.toLowerCase();
    // b.name = b.name.toLowerCase();
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return 1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return -1;
    }
    return 0;
  });

// export function filterForAlf(allPokemons, payload) {
//   const pokemonOrdenar = allPokemons;

//   if (payload === "asc") {
//     console.log("ORDENADO", ordenedAttackAsc(pokemonOrdenar));
//     return ordenedAttackAsc(pokemonOrdenar);
//   } else if (payload === "desc") {
//     return ordenedAttackDesc(pokemonOrdenar);
//   } else {
//     return allPokemons;
//   }
// }

export const filterForAlf = (allPokemons, order) => {
  const pokemonOrdenar = [...allPokemons];

  return order === "asc"
    ? ordenedAttackAsc(pokemonOrdenar)
    : ordenedAttackDesc(pokemonOrdenar);
};
