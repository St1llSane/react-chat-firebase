import User from './User'
import '../styles/c_styles/search.scss'

const Search = () => {
  return (
    <div className="search">
      <form className="search__form">
        <input
          className="search__form-input"
          type="text"
          placeholder="Search..."
        />
      </form>
      <User />
    </div>
  )
}

export default Search
