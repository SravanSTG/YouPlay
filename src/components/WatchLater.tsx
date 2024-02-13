import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ListVideoCard from "./ListVideoCard";

const WatchLater = () => {
  const watchLaterVideos = useSelector((store: RootState) => store.watchLater.watchLaterVideos);
  console.log(watchLaterVideos);

  const isSidebarOpen = useSelector((store: RootState) => store.sidebar.isMenuOpen);

  const style = {
    display: window.innerWidth < 640 && isSidebarOpen ? "none" : "block",
  };

  return (
    <div className="col-span-11 p-5 md:p-10" style={style}>
      <h1 className="font-bold text-xl">Watch Later</h1>
      {watchLaterVideos.length > 0 ? (
        <div>
          {watchLaterVideos.map((video) => (
            <ListVideoCard key={video.id} videoInfo={video} />
          ))}
        </div>
      ) : (
        <div className="mt-5">
          <p>You don't have any videos added to watch later.</p>
        </div>
      )}
    </div>
  );
};

export default WatchLater;
