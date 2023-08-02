import '../styles/Home/navbar.sass'
import SearchBar from './SearchBar';
import { FaHeart } from 'react-icons/fa';
import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext';

const Navbar = ({onSearch}) => {
  const { favorites } = useContext(FavoriteContext)
  
  
  return (
    <header>
      <nav>
        <img
          className="navbar-img"
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="Logo PokeAPI"
        />
        <p><FaHeart className='heart'/> {favorites.length}</p>
        <SearchBar onSearch={onSearch}/>
      </nav>
    </header>
  );
};

export default Navbar;
