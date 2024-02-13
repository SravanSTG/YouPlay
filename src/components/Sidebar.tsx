import { useEffect, useState } from "react";
import { GoHome, GoHistory, GoClock } from "react-icons/go";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFeedback, MdOutlineSmartDisplay, MdOutlineSubscriptions } from "react-icons/md";
import { TbUserSquare } from "react-icons/tb";
import { BiLike } from "react-icons/bi";
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
        <h3 className="text-center md:text-left font-bold md:px-2">You</h3>
        <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
          <TbUserSquare className="text-base md:text-xl mr-2" /> Your channel
        </p>
        <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
          <GoHistory className="text-base md:text-xl mr-2" /> History
        </p>
        <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
          <MdOutlineSmartDisplay className="text-base md:text-xl mr-2" /> Your videos
        </p>
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
