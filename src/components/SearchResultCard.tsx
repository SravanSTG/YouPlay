import { Link } from "react-router-dom";
import { SearchVideoCardType } from "../interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import useUploadDate from "../utils/useUploadDate";

type SearchResultCardProps = {
  videoInfo: SearchVideoCardType;
};

const SearchResultCard: React.FC<SearchResultCardProps> = ({ videoInfo }) => {
  const { id, snippet } = videoInfo;

  const { videoId } = id;
  const { title, channelTitle, description, thumbnails, publishedAt } = snippet;

  const isSidebarOpen = useSelector((store: RootState) => store.sidebar.isMenuOpen);

  const uploadDate = useUploadDate(publishedAt);

  return (
    <div className={`m-5 ${isSidebarOpen ? "md:m-5" : "md:m-12"}`}>
      <Link to={"/watch?v=" + videoId} className="cursor-pointer flex flex-col md:flex-row justify-center items-center md:justify-normal md:items-start xl:justify-center">
        <div className="md:w-52 md:h-36 lg:w-80 lg:h-44">
          <img
            src={thumbnails.medium.url}
            alt="video-thumb"
            className="rounded-lg"
          />
        </div>
        <div className={`flex flex-col px-1 md:px-0 md:ml-4 max-w-80 ${isSidebarOpen ? "md:w-80" : "md:w-[400px]"} lg:w-full lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl`}>
          <h2 className="font-bold text-base">{title}</h2>
          <p className="text-xs text-gray-500">{uploadDate}</p>
          <h3 className="text-sm my-2 font-semibold text-gray-500">{channelTitle}</h3>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default SearchResultCard;
