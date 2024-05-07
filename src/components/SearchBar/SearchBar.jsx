
export const SearchBar = ({ searchedSong, setSearchedSong, search }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    search();
    if (searchedSong.trim() === "") {
      alert("ingresa una canción")
    }
    setSearchedSong("")
  }
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid justify-content-center">
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchedSong}
            onChange={e => setSearchedSong(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  )
}
