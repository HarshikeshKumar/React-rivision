import { useEffect } from "react";
import axios from "axios";
import "./PokemonList.css";
import { useState } from "react";
import Pokemon from "../Pokemon/Pokemon";

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function downloadPokemons() {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    // console.log(response);
    // console.log(response.data);
    const pokemonResults = response.data.results;
    // console.log(pokemonResults);
    // console.log(response.data);
    const pokemonResultPromise = pokemonResults.map((pokemon) =>
      axios.get(pokemon.url),
    );
    // console.log(pokemonResultPromise);
    const pokemonData = await axios.all(pokemonResultPromise);
    // console.log(pokemonData);

    const res = pokemonData.map((pokeData) => {
      const pokemon = pokeData.data;
      // console.log(pokemon);
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other
          ? pokemon.sprites.other.dream_world.front_default
          : pokemon.sprites.front_shiny,

        type: pokemon.types,
      };
    });
    console.log(res);
    setPokemonList(res);

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
