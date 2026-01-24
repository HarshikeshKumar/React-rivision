import { useEffect } from "react";

function PokemonList() {
  useEffect(() => {
    console.log("Effect Called");
  }, []);

  return <div>Pokemon List</div>;
}

export default PokemonList;
