import { NavLink } from "react-router-dom";

export const SongCard = ({ name, cover, link, artist }) => {
  return (

    <section className="card my-3" style={{ maxWidth: 500 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={cover} className="img-fluid rounded-start" alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{artist}</p>
            <NavLink
              role="button"
              className="btn btn-dark d-flex align-items-center justify-content-center gap-2"
              to={link}
            >
              <p className="m-0">Abrir en Spotify</p>
              <img src="../../src/assets/Spotify_logo.png" alt="Spotify-logo" style={{ height: 25 }} />
            </NavLink>
          </div>
        </div>
      </div>
    </section>

  )
}
