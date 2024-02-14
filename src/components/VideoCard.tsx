import { Link } from "react-router-dom";
import { VideoCardType } from "../interfaces";
import useDuration from "../utils/useDuration";
import useUploadDate from "../utils/useUploadDate";
import useRoundNum from "../utils/useRoundNum";
import { LuDot } from "react-icons/lu";

type VideoCardProps = {
  videoInfo: VideoCardType;
};

const VideoCard: React.FC<VideoCardProps> = ({ videoInfo }) => {
  const { id, snippet, statistics, contentDetails } = videoInfo;

  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;
  const { duration } = contentDetails;

  const vidDuration = useDuration(duration);
  const uploadDate = useUploadDate(publishedAt);

  return (
    <div className="w-72 mb-8">
      <Link to={"/watch?v=" + id} className="cursor-pointer">
        <div id="video-thumbnail-container" className="relative overflow-hidden">
          <img
            src={thumbnails.medium.url}
            alt="video-thumb"
            className="rounded-lg hover:rounded-none"
          />
          <p className="absolute bottom-1 right-1 text-xs text-white font-semibold bg-black py-1 px-[5px] rounded-md">
            {vidDuration}
          </p>
        </div>
        <div className="px-[6px]">
          <h2 className="font-bold text-base mt-[6px]">{title}</h2>
          <h3 className="text-sm mb-[2px] font-semibold text-gray-500">
            {channelTitle}
          </h3>
          <p className="text-sm text-gray-500 flex items-center">
            {useRoundNum(viewCount)} views
            <span className="text-xl mt-0.5">
              <LuDot />
            </span>
            {uploadDate}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
