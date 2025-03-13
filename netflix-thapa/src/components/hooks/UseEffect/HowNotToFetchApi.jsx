import { useEffect, useState } from "react";
import "./pokemon.css";

const HowNotToFetchApi = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  // const fetchPokemon = async () => {
  //   try {
  //     const response = await fetch(API);
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch Pokemon");
  //     }
  //     const data = await response.json();
  //     setPokemon(data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setError(error);
  //     setLoading(false);
  //   }
  // };

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setPokemon(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log(pokemon);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );
  }

  if (pokemon) {
    return (
      <section className="container">
        <header>
          <h1>Let's Catch Pokémon</h1>
        </header>
        <ul className="card-demo">
          <li className="pokemon-card">
            <figure>{/* You can add an image of the Pokemon here */}</figure>
            <h1>{pokemon.name}</h1>
            <div className="grid-three-cols">
              <p className="pokemon-info">
                Height: <span>{pokemon.height}</span>
              </p>
              <p className="pokemon-info">
                Weight: <span>{pokemon.weight}</span>
              </p>
              <p className="pokemon-info">
                Speed: <span>{pokemon.stats[5].base_stat}</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
    );
  }

  return null; // Handle case where no data is available
};

export default HowNotToFetchApi;
