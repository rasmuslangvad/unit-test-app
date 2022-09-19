import { useState } from "react";
import PokemonService from "../service/pokemon-service";

const RandomPokemon = () => {
  const [pokemon, setPokemon] = useState();

  const fetchRandomPokemon = async () => {
    const pokemon = await PokemonService.fetchRandomPokemon();
    setPokemon(pokemon);
  };

  return (
    <div className="pokemon">
      <button onClick={() => fetchRandomPokemon()}>Fetch Pokemon</button>
      {pokemon && (
        <div>
          <h3 className="pokemon__name">{pokemon.name}</h3>
          <img
            data-testid="pokemon-image"
            src={pokemon.sprites.other.home.front_default}
            alt={pokemon.name}
            width="250"
            height="250"
          />
        </div>
      )}
    </div>
  );
};

export default RandomPokemon;
