import { useEffect, useState } from "react"
import { FaSearch } from 'react-icons/fa'
import {searchPokemon} from '../Api'

const SearchBar = () => {
  const [pokemonSearch, setPokemonSearch] = useState()
  const [pokemon, setPokemon] = useState()
  
  const onButtonClickHandle = async (e) => {
    e.preventDefault()
    const searchedPokemon = await searchPokemon(pokemonSearch)
    setPokemon(searchedPokemon)
  }

  return (
    <form onSubmit={onButtonClickHandle}>
      <input className="search-input" type="search" id="" placeholder="Buscar Pokemon" onChange={(e)=> setPokemonSearch(e.target.value)}  />
      <button className="search-button"><FaSearch /></button>
    </form>
  )
}

export default SearchBar