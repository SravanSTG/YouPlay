import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../redux/store";
import { closeSidebarMenu } from "../redux/sidebarSlice";
import { addToWatchLater, removeFromWatchLater } from "../redux/watchLaterSlice";
import { addToLikedVideos, removeFromLikedVideos } from "../redux/likedVideosSlice";
import { videoStatsUrl } from "../constants";
import { VideoCardType } from "../interfaces";
import { GrView } from "react-icons/gr";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { MdPlaylistAdd, MdPlaylistAddCheck } from "react-icons/md";
import Channel from "./Channel";
import CommentsList from "./CommentsList";
import useUploadDate from "../utils/useUploadDate";
import useRoundNum from "../utils/useRoundNum";
import useTextDecode from "../utils/useTextDecode";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WatchVideo = () => {
  const [videoDetails, setVideoDetails] = useState<VideoCardType | undefined>();
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const { id, snippet, statistics } = videoDetails || {};

  const { title, channelId, description, publishedAt } = snippet || {};
  const { viewCount, likeCount } = statistics || {};

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const isSidebarOpen = useSelector((store: RootState) => store.sidebar.isMenuOpen);
  const watchLaterVideos = useSelector((store: RootState) => store.watchLater.watchLaterVideos);
  const likedVideos = useSelector((store: RootState) => store.likedVideos.likedVideos);

  const uploadDate = useUploadDate(publishedAt!);
  const videoTitle = useTextDecode(title!);

  const style = {
    display: window.innerWidth < 640 && isSidebarOpen ? "none" : "flex",
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebarMenu());
    getVideoStats();
  }, []);

  // Check if video is in likedVideosList on initial render and subsequent renders
  useEffect(() => {
    const isVideoInLiked = likedVideos.some((video) => video.id === id);
    setIsLiked(isVideoInLiked);
  }, [likedVideos, id]);

  // Update likedVideosList on like button click
  useEffect(() => {
    if (isLiked && videoDetails) {
      dispatch(addToLikedVideos(videoDetails));
      toast("Added to Liked Videos");
    } else if (!isLiked && id) {
      dispatch(removeFromLikedVideos(id));
    }
  }, [isLiked]);

  // Check if video is in watchLaterVideos on initial render and subsequent renders
  useEffect(() => {
    const isVideoInWL = watchLaterVideos.some((video) => video.id === id);
    setIsSaved(isVideoInWL);
  }, [watchLaterVideos, id]);

  // Update watchLaterVideos on save button click
  useEffect(() => {
    if (isSaved && videoDetails) {
      dispatch(addToWatchLater(videoDetails));
      toast("Saved to Watch Later");
    } else if (!isSaved && id) {
      dispatch(removeFromWatchLater(id));
    }
  }, [isSaved]);

  const getVideoStats = async () => {
    const data = await fetch(
      `${videoStatsUrl}${videoId}&key=${import.meta.env.VITE_API_KEY}`
    );
    const json = await data.json();
    setVideoDetails(json.items[0]);
    // console.log(json.items[0]);
  };

  return (
    <div
      className="col-span-11 px-5 md:px-8 lg:px-16 xl:px-20 py-5 flex flex-col w-full sm:w-full md:w-full"
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
        <h2 className="font-bold text-xl">{videoTitle}</h2>
        <div className="flex flex-col md:flex-row items-start md:items-center my-3">
          {channelId && <Channel channelId={channelId} />}
          <div className="flex mt-3 md:mt-0 md:ml-auto">
            <p className="flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm">
              <GrView className="mr-2 text-xl" />
              {useRoundNum(viewCount || "")}
            </p>
            <p
              className={`ml-5 flex items-center px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer ${
                isLiked ? "bg-gray-200" : "bg-gray-100"
              }`}
              onClick={() => setIsLiked(!isLiked)}
            >
              {isLiked ? (
                <BiSolidLike className="mr-2 text-xl" />
              ) : (
                <BiLike className="mr-2 text-xl" />
              )}
              {useRoundNum(likeCount || "")}
            </p>
            <p
              className={`ml-5 flex items-center px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer ${
                isSaved ? "bg-gray-200" : "bg-gray-100"
              }`}
              onClick={() => setIsSaved(!isSaved)}
            >
              {isSaved ? (
                <>
                  <MdPlaylistAddCheck className="mr-2 text-xl" /> Saved
                </>
              ) : (
                <>
                  <MdPlaylistAdd className="mr-2 text-xl" /> Save
                </>
              )}
            </p>
          </div>
        </div>
        <p className="text-sm font-semibold">{uploadDate}</p>
        <div
          className="bg-gray-100 p-4 rounded-lg mt-2 cursor-pointer"
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
