import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { data, useParams } from "react-router-dom";
import "./PokemonDetails.css";

function PokemonDetails() {
  const { id } = useParams();
  // console.log(id);
  const [pokemon, setPokemon] = useState({ types: [] });

  async function downloadPokemon() {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}/`,
    );

    console.log("Data.....");
    console.log(response.data);
    setPokemon({
      name: response.data.name,
      image: response.data.sprites.other.dream_world.front_default,
      weight: response.data.weight,
      height: response.data.height,
      types: response.data.types.map((t) => t.type.name),
    });
  }

  useEffect(() => {
    downloadPokemon();
  }, []);
  return (
    <div className="pokemon-details-wrapper">
      <div className="pokemon-details-name">Name: {pokemon.name}</div>
      <img className="pokemon-details-image" src={pokemon.image} />
      <div className="pokemon-details-weight">Weight: {pokemon.weight}</div>
      <div className="pokemon-details-height">Hieght: {pokemon.height}</div>
      <div className="pokemon-details-types">
        {pokemon.types.map((t) => (
          <div key={t}>{t}</div>
        ))}
      </div>
    </div>
  );
}

export default PokemonDetails;
