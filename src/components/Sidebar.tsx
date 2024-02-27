import { useEffect, useState } from "react";
import { GoHome, GoClock, GoTrophy, GoLightBulb } from "react-icons/go";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoGameControllerOutline, IoSettingsOutline } from "react-icons/io5";
import { MdNewspaper, MdOutlineFeedback, MdOutlineScience, MdOutlineSubscriptions } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { PiFilmSlate, PiMusicNote } from "react-icons/pi";
// import { SiYoutubeshorts } from "react-icons/si";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [selectedTab, setSelectedTab] = useState<string>(window.location.pathname);

  const isSidebarOpen = useSelector((store: RootState) => store.sidebar.isMenuOpen);

  const location = useLocation();

  useEffect(() => {
    setSelectedTab(location.pathname);
  }, [location.pathname]);

  if (!isSidebarOpen) return null;

  return (
    <div className="col-span-1 px-7 md:p-5 md:pt-2 lg:p-7 lg:pt-2 lg:px-5 mt-5 md:m-0">
      <div className="flex flex-col justify-start border-b-[1px] border-gray-300 pb-2">
        <Link
          to="/"
          onClick={() => setSelectedTab("/")}
          className={selectedTab === "/" ? "bg-gray-200 rounded-lg" : ""}
        >
          <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
            <GoHome className="text-base md:text-xl mr-2" /> Home
          </p>
        </Link>
        {/* <Link to="">
          <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
            <SiYoutubeshorts className="text-base md:text-xl mr-2" /> Shorts
          </p>
        </Link> */}
        <Link
          to="/subscriptions"
          onClick={() => setSelectedTab("/subscriptions")}
          className={selectedTab === "/subscriptions" ? "bg-gray-200 rounded-lg" : ""}
        >
          <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
            <MdOutlineSubscriptions className="text-base md:text-xl mr-2" /> Subscriptions
          </p>
        </Link>
      </div>

      <div className="flex flex-col justify-start border-b-[1px] border-gray-300 py-2">
        {/* <p className="text-center md:text-left font-bold md:px-2">You</p>
        <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
          <TbUserSquare className="text-base md:text-xl mr-2" /> Your channel
        </p>
        <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
          <GoHistory className="text-base md:text-xl mr-2" /> History
        </p>
        <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
          <MdOutlineSmartDisplay className="text-base md:text-xl mr-2" /> Your videos
        </p> */}
        <Link
          to="/watchlater"
          onClick={() => setSelectedTab("/watchlater")}
          className={selectedTab === "/watchlater" ? "bg-gray-200 rounded-lg" : ""}
        >
          <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
            <GoClock className="text-base md:text-xl mr-2" /> Watch later
          </p>
        </Link>
        <Link
          to="/liked"
          onClick={() => setSelectedTab("/liked")}
          className={selectedTab === "/liked" ? "bg-gray-200 rounded-lg" : ""}
        >
          <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
            <BiLike className="text-base md:text-xl mr-2" /> Liked videos
          </p>
        </Link>
      </div>

      <div className="flex flex-col justify-start border-b-[1px] border-gray-300 py-2">
        <p className="text-center md:text-left font-bold md:px-2 mb-1">Explore</p>
        <Link
          to="/feed/film"
          onClick={() => setSelectedTab("/feed/film")}
          className={selectedTab === "/feed/film" ? "bg-gray-200 rounded-lg" : ""}
        >
          <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
            <PiFilmSlate className="text-base md:text-xl mr-2" /> Films
          </p>
        </Link>
        <Link
          to="/feed/music"
          onClick={() => setSelectedTab("/feed/music")}
          className={selectedTab === "/feed/music" ? "bg-gray-200 rounded-lg" : ""}
        >
          <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
            <PiMusicNote className="text-base md:text-xl mr-2" /> Music
          </p>
        </Link>
        <Link
          to="feed/sports"
          onClick={() => setSelectedTab("/feed/sports")}
          className={selectedTab === "/feed/sports" ? "bg-gray-200 rounded-lg" : ""}
        >
          <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
            <GoTrophy className="text-base md:text-xl mr-2" /> Sports
          </p>
        </Link>
        <Link
          to="feed/gaming"
          onClick={() => setSelectedTab("/feed/gaming")}
          className={selectedTab === "/feed/gaming" ? "bg-gray-200 rounded-lg" : ""}
        >
          <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
            <IoGameControllerOutline className="text-base md:text-xl mr-2" /> Gaming
          </p>
        </Link>
        <Link
          to="feed/news"
          onClick={() => setSelectedTab("/feed/news")}
          className={selectedTab === "/feed/news" ? "bg-gray-200 rounded-lg" : ""}
        >
          <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
            <MdNewspaper className="text-base md:text-xl mr-2" /> News
          </p>
        </Link>
        <Link
          to="feed/education"
          onClick={() => setSelectedTab("/feed/education")}
          className={selectedTab === "/feed/education" ? "bg-gray-200 rounded-lg" : ""}
        >
          <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
            <GoLightBulb className="text-base md:text-xl mr-2" /> Education
          </p>
        </Link>
        <Link
          to="feed/science"
          onClick={() => setSelectedTab("/feed/science")}
          className={selectedTab === "/feed/science" ? "bg-gray-200 rounded-lg" : ""}
        >
          <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
            <MdOutlineScience className="text-base md:text-xl mr-2" /> Science & Tech
          </p>
        </Link>
      </div>

      <div className="flex flex-col justify-start border-b-[1px] border-gray-300 py-2">
        <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
          <IoSettingsOutline className="text-base md:text-xl mr-2" /> Settings
        </p>
        <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
          <IoIosHelpCircleOutline className="text-base md:text-xl mr-2" /> Help
        </p>
        <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
          <MdOutlineFeedback className="text-base md:text-xl mr-2" /> Feedback
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
