import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { VideoCardType } from "../interfaces";
import useDuration from "../utils/useDuration";
import useUploadDate from "../utils/useUploadDate";
import useRoundNum from "../utils/useRoundNum";
import { LuDot } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { removeFromWatchLater } from "../redux/watchLaterSlice";

type ListVideoCardPropsType = {
  videoInfo: VideoCardType;
};

const ListVideoCard: React.FC<ListVideoCardPropsType> = ({ videoInfo }) => {
  const { id, snippet, statistics, contentDetails } = videoInfo;

  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;
  const { duration } = contentDetails;

  const vidDuration = useDuration(duration);
  const uploadDate = useUploadDate(publishedAt);

  const dispatch = useDispatch();

  return (
    <div className="my-4">
      <Link
        to={"/watch?v=" + id}
        id="wl-video-card"
        className="p-2 flex cursor-pointer hover:bg-gray-100 rounded-lg"
      >
        <div className="relative flex-none w-40 h-[90px]">
          <img
            src={thumbnails.medium.url}
            alt="video-thumb"
            className="rounded-lg hover:rounded-none"
          />
          <p className="absolute bottom-1 right-1 text-xs text-white font-semibold bg-black py-1 px-[5px] rounded-md">
            {vidDuration}
          </p>
        </div>
        <div className="px-[6px] md:px-2 flex-grow">
          <h2 className="font-bold text-sm lg:text-base">{title}</h2>
          <h3 className="text-xs md:text-sm font-semibold text-gray-500">
            {channelTitle}
          </h3>
          <p className="text-xs text-gray-500 hidden md:flex items-center">
            {useRoundNum(viewCount)} views
            <span className="text-xl mt-0.5">
              <LuDot />
            </span>
            {uploadDate}
          </p>
        </div>
        <div onClick={(e) => e.preventDefault()} id="wl-video-card-close-btn">
          <p className="text-xs md:text-base">
            <IoClose onClick={() => dispatch(removeFromWatchLater(id))} />
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ListVideoCard;
