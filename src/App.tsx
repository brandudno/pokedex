import { useEffect, useState } from 'react'
import { PokemonThumbnail } from './components/pokemon/pokemon'
import { Pokemon } from './models/Pokemon'
import { getPokemon } from './services/PokemonService';

function App() {
  const [pokemonCollection, setPokemonCollection] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemon(0).then((allPokemon: Pokemon[]) => setPokemonCollection(allPokemon));

    setPokemonCollection([]);
  }, []);

  return (
    <>
      <div className='flex-container flex-container_quarters'>
        { pokemonCollection.map((pokemon: Pokemon) => {
          return <PokemonThumbnail key={pokemon.name} pokemon={pokemon} />
        }) }
      </div>
    </>
  )
}

export default App
