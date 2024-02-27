import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ListVideoCard from "./ListVideoCard";

const LikedVideos = () => {
  const likedVideosList = useSelector((store: RootState) => store.likedVideos.likedVideos);

  const isSidebarOpen = useSelector((store: RootState) => store.sidebar.isMenuOpen);

  const style = {
    display: window.innerWidth < 640 && isSidebarOpen ? "none" : "block",
  };

  return (
    <div className="col-span-11 p-5 md:p-10" style={style}>
      <h1 className="font-bold text-xl">Liked Videos</h1>
      {likedVideosList.length > 0 ? (
        <div>
          {likedVideosList.map((video) => (
            <ListVideoCard key={video.id} videoInfo={video} />
          ))}
        </div>
      ) : (
        <div className="mt-5">
          <p>You don't have any liked videos.</p>
        </div>
      )}
    </div>
  );
};

export default LikedVideos;
