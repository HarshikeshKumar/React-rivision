import { useEffect } from "react";
import axios from "axios";
import "./PokemonList.css";
import { useState } from "react";

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function downloadPokemons() {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    // console.log(response);
    console.log(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    downloadPokemons();
  }, []);

  return (
    <div className="pokemon-list-wrapper">
      <div>Pokemon List</div>
      {isLoading ? "Loading...." : "Data downloaded"}
    </div>
  );
}

export default PokemonList;
