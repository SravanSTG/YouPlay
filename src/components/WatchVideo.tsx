import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSidebarMenu } from "../redux/sidebarSlice";
import { RootState } from "../redux/store";
import { videoStatsUrl } from "../constants";
import { VideoCardType } from "../interfaces";
import { GrView } from "react-icons/gr";
import { BiLike } from "react-icons/bi";
import CommentsList from "./CommentsList";

const WatchVideo = () => {
  const [videoDetails, setVideoDetails] = useState<VideoCardType | undefined>();
  const [showDescription, setShowDescription] = useState<boolean>(false);

  const { snippet, statistics } = videoDetails || {};

  const { title, channelTitle, description } = snippet || {};
  const { viewCount, likeCount } = statistics || {};

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const isSidebarOpen = useSelector(
    (store: RootState) => store.sidebar.isMenuOpen
  );

  const style = {
    display: window.innerWidth < 640 && isSidebarOpen ? "none" : "flex",
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebarMenu());
    getVideoStats();
  }, []);

  const getVideoStats = async () => {
    const data = await fetch(
      `${videoStatsUrl}${videoId}&key=${import.meta.env.VITE_API_KEY}`
    );
    const json = await data.json();
    setVideoDetails(json.items[0]);
    console.log(json.items[0]);
  };

  return (
    <div
      className="col-span-11 px-8 lg:px-16 xl:px-20 py-5 flex flex-col w-full sm:w-full md:w-full"
      style={style}
    >
      <div className="w-full xl:w-[900px]">
        <iframe
          className="rounded-2xl w-full xl:w-[900px] h-[200px] sm:h-80 md:h-96 lg:h-[500px]"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="my-3 xl:w-[900px]">
        <h2 className="font-bold text-xl">{title}</h2>
        <div className="flex items-center my-3">
          <h3 className="text-sm mb-[2px] font-semibold text-gray-500">
            {channelTitle}
          </h3>
          <p className="ml-auto flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm">
            <GrView className="mr-2 text-xl" /> {viewCount}
          </p>
          <p className="ml-5 flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm">
            <BiLike className="mr-2 text-xl" />
            {likeCount}
          </p>
        </div>
        <div
          className="bg-gray-100 p-4 rounded-lg mt-4"
          onClick={() => setShowDescription(!showDescription)}
        >
          <p
            className={`text-sm md:text-base ${
              showDescription
                ? "w-[278px] sm:w-[540px] md:w-full xl:w-[850px] overflow-auto whitespace-break-spaces"
                : "w-[278px] sm:w-[540px] xl:w-[850px] whitespace-nowrap overflow-hidden text-ellipsis"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
      <div className="xl:w-[900px]">
        <h3 className="font-bold text-lg mt-4">Comments</h3>
        {videoId && <CommentsList videoId={videoId} />}
      </div>
    </div>
  );
};

export default WatchVideo;
