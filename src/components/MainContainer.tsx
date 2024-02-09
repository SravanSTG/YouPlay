import { useEffect, useState } from "react";
import { youtubeVideosUrl } from "../constants";
import VideoCard from "./VideoCard";
import { VideoCardType } from "../interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Shimmer from "../layout/Shimmer";

const MainContainer = () => {
  const [videos, setVideos] = useState<VideoCardType[]>([]);

  const isSidebarOpen = useSelector((store: RootState) => store.sidebar.isMenuOpen);

  const style = {
    display: window.innerWidth < 640 && isSidebarOpen ? "none" : "flex",
  };

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(youtubeVideosUrl + import.meta.env.VITE_API_KEY);
    const json = await data.json();
    setVideos(json.items);
  };

  return videos.length === 0 ? (
    <Shimmer />
  ) : (
    <div
      className="col-span-11 p-6 flex flex-wrap justify-evenly"
      style={style}
    >
      {videos.map((video) => (
        <VideoCard key={video.id} videoInfo={video} />
      ))}
    </div>
  );
};

export default MainContainer;
