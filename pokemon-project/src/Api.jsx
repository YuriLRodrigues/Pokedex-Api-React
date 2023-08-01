import { isRouteErrorResponse } from "react-router-dom"

export const searchPokemon = async (pokeName) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`

    const response = await fetch(url)
    const data = await response.json()
    return data
    
  } catch (error) {
    console.log(error)
  }
}
export const getPokemons = async (limit = 50, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

    const response = await fetch(url)
    const data = await response.json()
    return data
    
  } catch (error) {
    console.log(error)
  }
}
export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
    
  } catch (error) {
    console.log(error)
  }
}

