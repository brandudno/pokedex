export type Pokemon = {
  name: string,
  types: PokemonType[],
  sprites: PokemonSprite
}

type PokemonType = {
  type: {
    name: string
  }
}

type PokemonSprite = {
  back_default: string | null,
  back_female: string | null,
  back_shiny: string | null,
  back_shiny_female: string | null,
  front_default: string | null,
  front_female: string | null,
  front_shiny: string | null,
  front_shiny_female: string | null
}

export type BasicPokemon = {
  name: string,
  url: string
}