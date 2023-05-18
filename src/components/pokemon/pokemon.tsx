import { Pokemon } from "../../models/Pokemon"


export type PokemonProps = {
  pokemon: Pokemon
}

export const PokemonThumbnail = ({pokemon}: PokemonProps) => {
  
  return (
    <div className="item single-pokemon">
      <p>{pokemon.name}</p>
      <img src={pokemon.sprites.front_default!} alt={pokemon.name} />
    </div>
  )
}