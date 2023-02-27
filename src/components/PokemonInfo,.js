import React from 'react';

const PokemonInfo = (props) => {
    return (
        <div className="text-center">
            <img src={props.image} width="200px" height="200px" />
            <h5>Height: {props.height}</h5>
            <h5>Weight: {props.weight}</h5>
            <h5>Abilities: {props.abilities} </h5>
            <h5>Types: {props.types} </h5>
        </div>
    );
}

export default PokemonInfo;
