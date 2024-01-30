import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSidebarMenu } from "../redux/sidebarSlice";
import { RootState } from "../redux/store";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const isSidebarOpen = useSelector((store: RootState) => store.sidebar.isMenuOpen);

  const style = {
    display: window.innerWidth < 640 && isSidebarOpen ? "none" : "flex", 
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebarMenu());
  }, []);

  return (
    <div className="col-span-11 px-8 lg:px-16 xl:px-20 py-5" style={style}>
      <iframe
        className="rounded-2xl w-full xl:w-[900px] h-[200px] md:h-96 lg:h-[500px]"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchVideo;
