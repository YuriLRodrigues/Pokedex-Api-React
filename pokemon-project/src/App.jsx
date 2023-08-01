import Navbar from "./components/Navbar"
import Pokedex from "./components/Pokedex"
import { FavoriteProvider } from "./context/FavoriteContext"

const App = () => {
  return (
    <>
      <FavoriteProvider>
        <Navbar />
        <Pokedex />
      </FavoriteProvider>
    </>
  )
}

export default App