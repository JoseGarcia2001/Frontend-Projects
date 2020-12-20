const api = async () => {
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await pokemon;
  console.log(data.results);
  return data;
};

const pokemon = api();

console.log(pokemon);
