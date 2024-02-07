import { BiSolidUserRectangle } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdHomeFilled, MdOutlineFeedback, MdSmartDisplay, MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isSidebarOpen = useSelector(
    (store: RootState) => store.sidebar.isMenuOpen
  );

  if (!isSidebarOpen) return null;

  return (
    <div className="col-span-1 px-7 md:p-5 md:pt-2 lg:p-7 lg:pt-2 lg:px-5 mt-5 md:m-0">
      <div className="flex flex-col justify-start border-b-[1px] border-gray-300 pb-2">
        <Link to="/">
          <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
            <MdHomeFilled className="text-base md:text-xl mr-2" /> Home
          </p>
        </Link>
        <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
          <SiYoutubeshorts className="text-base md:text-xl mr-2" /> Shorts
        </p>
        <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
          <MdSubscriptions className="text-base md:text-xl mr-2" /> Subscriptions
        </p>
      </div>

      <div className="flex flex-col justify-start border-b-[1px] border-gray-300 py-2">
        <h3 className="text-center md:text-left font-bold md:px-2">You</h3>
        <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
          <BiSolidUserRectangle className="text-base md:text-xl mr-2" /> Your channel
        </p>
        <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
          <FaHistory className="text-base md:text-xl mr-2" /> History
        </p>
        <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
          <MdSmartDisplay className="text-base md:text-xl mr-2" /> Your videos
        </p>
        <p className="flex items-center justify-center md:justify-start py-2 md:px-2 text-sm md:text-base cursor-pointer hover:bg-blue-200 hover:rounded-lg">
          <GoClockFill className="text-base md:text-xl mr-2" /> Watch later
        </p>
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
