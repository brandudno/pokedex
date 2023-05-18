import axios from "axios";
import { BasicPokemon, Pokemon } from "../models/Pokemon";

const baseUrl: string = `https://pokeapi.co/api/v2/`;

export const getBasicPokemon = (offset: number = 0): Promise<BasicPokemon[]> => {
  return axios.get(`${baseUrl}pokemon?limit=25&offset=${offset}`).then((response: any) => {
    return response.data.results
  });
}

export const getSinglePokemon = (url: string): Promise<Pokemon> => {
  return axios.get(`${url}`).then((response: any) => {
    return response.data;
  });
}

export const getPokemon = (offset: number = 0): Promise<Pokemon[]> => {
  return getBasicPokemon(offset).then((pokemonCollection: BasicPokemon[]) => {
    return pokemonCollection;
  }).then((basicPokemonCollection: BasicPokemon[]) => {
    return Promise.all(basicPokemonCollection.map((basicPokemon: BasicPokemon) => {
      return getSinglePokemon(basicPokemon.url);
    }));
  });
}