export const PokemonCards = ({ pokemonData }) => {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
        />
      </figure>

      <h1 className="pokemon-name">{pokemonData.name}</h1>

      <div className="pokemon-info pokemon-highlight">
        <p>
          {pokemonData.types.map((curType) => curType.type.name).join(", ")}
        </p>
      </div>
      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span>height:</span>
          {pokemonData.height}
        </p>
        <p className="pokemon-info">
          <span>weight:</span>
          {pokemonData.weight}
        </p>
        <p className="pokemon-info">
          <span>speed:</span>
          {pokemonData.stats[5].base_stat}
        </p>
      </div>
    </li>
  );
};
