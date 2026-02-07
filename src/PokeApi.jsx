import React, { useState, useEffect } from "react";
import './PokeApi.css';



const PokeApi = () => {
  // 1. El almacén donde guardamos la colección
  const [listaPokemon, actualizarLista] = useState([]);

  const obtenerDatosDeInternet = async () => {
    // 2. El mensajero trae el paquete de la red (está cerrado)
    const paqueteCerrado = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    
    // 3. Abrimos el paquete y traducimos el contenido
    const cajaAbierta = await paqueteCerrado.json();
 
    // 4. Guardamos solo los resultados en nuestro almacén
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
            {/* Aquí irá la imagen más adelante */}
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
