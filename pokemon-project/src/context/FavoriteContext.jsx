import { createContext, useState } from "react"

export const FavoriteContext = createContext()

export const FavoriteProvider = ({children}) => {
  const [favorites, setFavorites] = useState([])
  const updateFavoritePokemons = (pokeName) => {
    const updateFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(pokeName)
    if (favoriteIndex >= 0) {
      const removedPokemon = updateFavorites.filter((pokemon) => pokemon !== pokeName)
      setFavorites(removedPokemon)
      localStorage.setItem('fav', JSON.stringify(removedPokemon))
    } else {
      updateFavorites.push(pokeName)
      setFavorites(updateFavorites)
      localStorage.setItem('fav', JSON.stringify(updateFavorites))
    }
  }

  return (
    <FavoriteContext.Provider value={{favorites, setFavorites, updateFavoritePokemons}}>
      {children}
    </FavoriteContext.Provider>
  )
}

