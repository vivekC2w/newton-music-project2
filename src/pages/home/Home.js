import { useEffect } from "react";
import { useState } from "react";
import { getHeaderWithProjectId } from "../../utils/configs";
import Loader from "../../components/Loader/loader";

function Home() {
  const [musicList, setMusicList] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(musicList);

  useEffect(() => {
    fetchMusic();
  }, []);

  const fetchMusic = async () => {
    setLoading(true);
    const config = getHeaderWithProjectId();
    const response = fetch(
      "https://academics.newtonschool.co/api/v1/music/song",
      config
    );
    const data = await (await response).json();
    setLoading(false);
    const { data: listOfMusic } = data;
    setMusicList(listOfMusic);
  };

  return (
    <>
      "HOME"
      {loading && <Loader/>}
      {/* {!loading && musicList} */}
    </>
  );
}

export default Home;
