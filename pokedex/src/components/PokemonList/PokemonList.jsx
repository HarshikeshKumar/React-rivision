import { useEffect } from "react";
import axios from "axios";
import "./PokemonList.css";
import { useState } from "react";
import Pokemon from "../Pokemon/Pokemon";

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const POKEDEX_URL = "https://pokeapi.co/api/v2/pokemon";

  async function downloadPokemons() {
    // this downloads the list of 20 pokemons
    const response = await axios.get(POKEDEX_URL);

    // We get the array of pokemons from result
    const pokemonResults = response.data.results;

    // Iterating over the array of pokemons, and using the url, to create
    // an array of promise that will download those 20 pokemons
    const pokemonResultPromise = pokemonResults.map((pokemon) =>
      axios.get(pokemon.url),
    );

    // Passing the promise array to axios.all()
    const pokemonData = await axios.all(pokemonResultPromise); // Array of 20 pokemon detailed data

    // Now iterate on the data of each pokemon, and extract id, name, image,types
    const pokeListResult = pokemonData.map((pokeData) => {
      const pokemon = pokeData.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other
          ? pokemon.sprites.other.dream_world.front_default
          : pokemon.sprites.front_shiny,

        type: pokemon.types,
      };
    });
    console.log(pokeListResult);
    setPokemonList(pokeListResult);

    setIsLoading(false);
  }

  useEffect(() => {
    downloadPokemons();
  }, []);

  return (
    <div className="pokemon-list-wrapper">
      <div>Pokemon List</div>
      {isLoading
        ? "Loading...."
        : pokemonList.map((p) => (
            <Pokemon name={p.name} image={p.image} key={p.id} />
          ))}
    </div>
  );
}

export default PokemonList;
