// SERVICES
import { getSong } from "../../services/searchSongServices.js";
// COMPONENTS
import { SearchBar } from "../../components/SearchBar/SearchBar.jsx";
import { SongCard } from "../../components/SongCard/SongCard.jsx";
import { SongList } from "../../components/SongList/SongList.jsx";
// REACT
import { useEffect, useState } from "react";

export const Search = () => {

    // Busqueda de canción
    const [song, setSong] = useState("");
    // lista de canciones
    const [songs, setSongs] = useState([]);

    const getInitialData = async () => {
        try {
            const data = await getSong(song);
            console.log(data);
            setSongs(data)
        } catch (error) {
            alert("algo salio mal" + error)
        }
    };

    useEffect(() => {
        getInitialData();
    }, [])

    return (
        <div className="bg-body-tertiary">
            <SearchBar
                searchedSong={song}
                setSearchedSong={setSong}
                search={() => {
                    getInitialData();
                }}
            />
            <SongList>
                {songs.map((song) => {
                    return (
                        <SongCard
                            key={`${song.data.id}`}
                            name={song.data.name}
                            cover={song.data.albumOfTrack.coverArt.sources[0].url}
                            link={song.data.uri}
                            artist={song.data.artists.items[0].profile.name}
                        />
                    )
                })}
            </SongList>
        </div>
    )
}
