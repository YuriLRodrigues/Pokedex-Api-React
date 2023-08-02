import { useState } from "react"
import { FaSearch } from 'react-icons/fa'

const SearchBar = ({onSearch}) => {
  const [search, setSearch] = useState()
  

    const onChangeHandler = async (e) => {
      setSearch(e.target.value)
      if(e.target.value.length === 0) {
          await onSearch(undefined)
      }
    }

    const onButtonClickHandler = async (e) => {
      e.preventDefault()
      await onSearch(search.toLowerCase())
    }

  return (
    <form>
      <input className="search-input" type="search" placeholder="Buscar Pokemon" onChange={onChangeHandler}  />
      <button className="search-button" onClick={onButtonClickHandler}><FaSearch /></button>
    </form>
  )
}

export default SearchBar