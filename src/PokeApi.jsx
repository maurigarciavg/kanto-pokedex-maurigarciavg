import React, { useState, useEffect } from "react";
import './PokeApi.css';



const PokeApi = () => {
  
  const [listaPokemon, actualizarLista] = useState([]);

  const obtenerDatosDeInternet = async () => {
    
    const paqueteCerrado = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    
   
    const cajaAbierta = await paqueteCerrado.json();
 

    actualizarLista(cajaAbierta.results); 
  };

  useEffect(() => {
    obtenerDatosDeInternet();
  }, []);

  return (
    <div className="pokedex-container">
      <h1 className="pokedex-title">🎮 Kanto PokeDex by Mauri 🎮</h1>
      
      <div className="pokemon-grid"> 
        {listaPokemon.map((unPokemon) => (
          <div key={unPokemon.name} className="pokemon-card">
         
            <div className="pokemon-image-container">
              <div className="placeholder-image">?</div>
            </div>
            <h3 className="pokemon-name">{unPokemon.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};


export default PokeApi;
