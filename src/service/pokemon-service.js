const PokemonService = {
  fetchRandomPokemon: async () => {
    const id = Math.floor(Math.random() * 100) + 1;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();

    console.log("Your random pokemon is:");
    console.log(pokemon.name);

    return pokemon;
  },
};

export default PokemonService;
