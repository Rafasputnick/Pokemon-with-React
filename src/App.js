import React from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';
import { useEffect } from 'react';
import PokemonInfo from './components/PokemonInfo,';

const App = () => {
  const [pokemonId, setPokemonId] = React.useState(1);
  const [pokemonData, setPokemonData] = React.useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      })
  }, [pokemonId])

  function Load(str) {
    if (str === 'add') {
      setPokemonId(pokemonId + 1);
    } else if (pokemonId > 1) {
      setPokemonId(pokemonId - 1);
    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div>
      <div className="d-flex justify-content-around">
        <Button onClick={() => Load('diff')}> Anterior </Button>
        {pokemonData.name && pokemonId && <h2 className="text-center"> {capitalizeFirstLetter(pokemonData.name)} #{pokemonId} </h2>}
        <Button onClick={() => Load('add')}> Proximo </Button>

      </div>
      {pokemonData?.sprites?.front_default &&
        <PokemonInfo
          image={pokemonData.sprites.front_default}
          height={pokemonData.height} weight={pokemonData.weight}
          abilities={pokemonData.abilities.map((cur) => cur.ability.name).join(', ')}
          types={pokemonData.types.map((cur) => cur.type.name).join(', ')}

        />
      }


    </div>
  );
}

export default App;
