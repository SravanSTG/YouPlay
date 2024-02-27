import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { closeSidebarMenu } from "../redux/sidebarSlice";
import { youtubeVideosUrl } from "../constants";
import { VideoCardType } from "../interfaces";
import VideoCard from "./VideoCard";
import Shimmer from "../layout/Shimmer";

const MainContainer = () => {
  const [videos, setVideos] = useState<VideoCardType[]>([]);

  const isSidebarOpen = useSelector((store: RootState) => store.sidebar.isMenuOpen);

  const style = {
    display: window.innerWidth < 640 && isSidebarOpen ? "none" : "flex",
  };

  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();

    if (window.innerWidth < 840) {
      dispatch(closeSidebarMenu());
    }
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
      className="col-span-11 p-6 flex flex-wrap gap-x-5 justify-evenly"
      style={style}
    >
      {videos.map((video) => (
        <VideoCard key={video.id} videoInfo={video} />
      ))}
    </div>
  );
};

export default MainContainer;
