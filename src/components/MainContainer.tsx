import { useEffect, useState } from "react";
import { youtubeVideosUrl } from "../constants";
import VideoCard from "./VideoCard";
import { VideoCardType } from "../interfaces";

const MainContainer = () => {
  const [videos, setVideos] = useState<VideoCardType[]>([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(youtubeVideosUrl + import.meta.env.VITE_API_KEY);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="col-span-11 p-6 flex flex-wrap justify-evenly">
      {videos.map((video) => (
        <VideoCard key={video.id} videoInfo={video} />
      ))}
    </div>
  );
};

export default MainContainer;
