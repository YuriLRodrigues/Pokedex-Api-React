import { createContext, useState } from "react"

export const SearchContext = createContext()

export const SearchProvider = () => {
  const [pokemonSearch, setPokemonSearch] = useState()
  
  return (
    <div>SearchContext</div>
  )
}

