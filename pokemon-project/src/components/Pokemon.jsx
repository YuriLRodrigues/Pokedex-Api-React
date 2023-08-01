import { PropTypes } from "prop-types";
import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";

const Pokemon = ({ data }) => {
  const {updateFavoritePokemons, favorites} = useContext(FavoriteContext)
  return (
    <article className="poke-card">
      <img
        src={data.sprites.front_default}
        alt={data.name}
        className="pokemon-image"
      />
      <div className="card-body">
        <div className="poke-info">
          <h3 className="pokemon-name">{data.name}</h3>
          <span>#{data.id}</span>
          <button onClick={()=> updateFavoritePokemons(data.name)} className={favorites.includes(data.name) ? "heart" : "black-heart"} >
            <FaHeart />
          </button>
        </div>
        <div className="card-bottom">
          {data.types.map((type, index) => {
            return <p className={type.type.name} key={index}>{type.type.name}</p>;
          })}
        </div>
      </div>
      
    </article>
  );
};

Pokemon.propTypes = {
  data: PropTypes.object,
  addToFav: PropTypes.func,
};

export default Pokemon;
