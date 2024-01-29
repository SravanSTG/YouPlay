import { VideoCardType } from "../interfaces";
import useDuration from "../utils/useDuration";

type VideoCardProps = {
  videoInfo: VideoCardType;
};

const VideoCard: React.FC<VideoCardProps> = ({ videoInfo }) => {
  const { snippet, statistics, contentDetails } = videoInfo;

  const { title, channelTitle, thumbnails } = snippet;
  const { viewCount } = statistics;
  const { duration } = contentDetails;

  const vidDuration = useDuration(duration);

  return (
    <div className="w-72 mb-8">
      <div className="relative">
        <img
          src={thumbnails.medium.url}
          alt="video-thumb"
          className="rounded-lg"
        />
        <p className="absolute bottom-1 right-1 text-xs text-white font-semibold bg-black py-1 px-[5px] rounded-md">{vidDuration}</p>
      </div>
      <div className="px-[6px]">
        <h2 className="font-bold text-base mt-[6px]">{title}</h2>
        <h3 className="text-sm mb-[2px] font-semibold text-gray-500">
          {channelTitle}
        </h3>
        <p className="text-sm text-gray-500">{viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
