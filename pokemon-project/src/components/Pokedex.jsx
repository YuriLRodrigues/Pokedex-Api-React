import { useContext, useEffect, useState } from "react";
import "../styles/Home/pokedex.sass";
import { getPokemons, getPokemonData } from "../Api";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";
import { FavoriteContext } from "../context/FavoriteContext";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 25
  const {favorites, setFavorites} = useContext(FavoriteContext)

  const onLeftCickHandler = () => {
    if (page+1 > 1){
      setPage(page-1)
    } else {
      setPage(totalPages-1)
    }
  }

  const onRightCickHandler = () => {
    if (page+1 !== totalPages ) {
      setPage(page+1)
    } else {
      setPage(0)
    }
  }

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(itemsPerPage, itemsPerPage * page);
      const prom = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(prom);
      setPokemons(results);
      setTotalPages(Math.ceil(data.count / itemsPerPage))
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const localFavoritePokemons = () => {
    const pokemons = JSON.parse(localStorage.getItem('fav')) || []
    setFavorites(pokemons)
  }

  useEffect(() => {
    localFavoritePokemons()
  }, []);

  return (
    <>
      <div className="pokedex-header">
        <p>Pokédex</p>
        <Pagination 
          page={page+1}
          totalPages={totalPages}
          previousClick={onLeftCickHandler}
          nextClick={onRightCickHandler}
        />
      </div>
      <section className="poke-container ">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <Pokemon key={pokemon.id} data={pokemon}/>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </section>
    </>
  );
};

export default Pokedex;

