export const AlbumCard = ({ rank, title, artist, cover, positionLastWeek, peekPosition, weeksOnChart }) => {
    return (
        <section className="card my-3" style={{ width: 500 }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={cover} className="img-fluid rounded-start" alt={title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body d-flex justify-content-center flex-column">
                        <h3>
                            rank: {rank}
                        </h3>
                        <h5 className="card-title">
                            {title} - {artist}
                        </h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Peak Position: {peekPosition}</li>
                            <li className="list-group-item">Position Last Week: {positionLastWeek}</li>
                            <li className="list-group-item">Weeks On Chart: {weeksOnChart}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}
