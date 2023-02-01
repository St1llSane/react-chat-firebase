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
      <div className="user-chat">
        <img src="./users/user-1.jpg" alt="" />
        <div className="user-chat__info">
          <span>Grisha Svetov</span>
        </div>
      </div>
    </div>
  )
}

export default Search
