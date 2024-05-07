// SERVICES
import { getData } from "../../services/SongServices";
// COMPONENTS
import { AlbumCard } from "../../components/AlbumCard/AlbumCard.jsx";
import { SongList } from "../../components/SongList/SongList.jsx";
// REACT
import { useEffect, useState } from "react";

export const Home = () => {
  const [chart, setChart] = useState([]);

  const getInitialData = async () => {
    try {
      const data = await getData();
      console.log(data);
      setChart(data)
    } catch (error) {
      console.log(`Error ${error} en la peticion`);
    }
  }

  useEffect(() => {
    getInitialData();
  }, []
  )


  return (
    <div>
      <h1 className="text-center mt-1">TOP BILLBOARD HOT 100</h1>
      <SongList>
        {
          chart.map((song, index) => {
            return (
              <AlbumCard
              key={index}
              rank={song.rank}
              title={song.title}
              artist={song.artist}
              cover={song.cover}
              positionLastWeek={song.position.positionLastWeek}
              peekPosition={song.position.peakPosition}
              weeksOnChart={song.position.weeksOnChart}
              />
            )
          }
          )
        }
      </SongList>
    </div>
  )
}
