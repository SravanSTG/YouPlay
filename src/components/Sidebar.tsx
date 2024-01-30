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
  const isSidebarOpen = useSelector((store: RootState) => store.sidebar.isMenuOpen);

  if (!isSidebarOpen) return null;

  return (
    <div className="col-span-1 px-7 mt-5 md:m-0">
      <div className="flex flex-col justify-start border-b-[1px] border-gray-300 pb-2">
        <Link to="/">
          <p className="flex items-center justify-center md:justify-start py-2 text-sm md:text-base cursor-pointer"><MdHomeFilled className="text-base md:text-xl mr-2" /> Home</p>
        </Link>
        <p className="flex items-center justify-center md:justify-start py-2 text-sm md:text-base"><SiYoutubeshorts className="text-base md:text-xl mr-2" /> Shorts</p>
        <p className="flex items-center justify-center md:justify-start py-2 text-sm md:text-base"><MdSubscriptions className="text-base md:text-xl mr-2" /> Subscriptions</p>
      </div>

      <div className="flex flex-col justify-start border-b-[1px] border-gray-300 py-2">
        <h3 className="text-center md:text-left font-bold">You</h3>
        <p className="flex items-center justify-center md:justify-start py-2 text-sm md:text-base"><BiSolidUserRectangle className="text-base md:text-xl mr-2" /> Your channel</p>
        <p className="flex items-center justify-center md:justify-start py-2 text-sm md:text-base"><FaHistory className="text-base md:text-xl mr-2" /> History</p>
        <p className="flex items-center justify-center md:justify-start py-2 text-sm md:text-base"><MdSmartDisplay className="text-base md:text-xl mr-2" /> Your videos</p>
        <p className="flex items-center justify-center md:justify-start py-2 text-sm md:text-base"><GoClockFill className="text-base md:text-xl mr-2" /> Watch later</p>
      </div>

      <div className="flex flex-col justify-start border-b-[1px] border-gray-300 py-2">
        <p className="flex items-center justify-center md:justify-start py-2 text-sm md:text-base"><IoSettingsOutline className="text-base md:text-xl mr-2" /> Settings</p>
        <p className="flex items-center justify-center md:justify-start py-2 text-sm md:text-base"><IoIosHelpCircleOutline className="text-base md:text-xl mr-2" /> Help</p>
        <p className="flex items-center justify-center md:justify-start py-2 text-sm md:text-base"><MdOutlineFeedback className="text-base md:text-xl mr-2" /> Feedback</p>
      </div>
    </div>
  );
};

export default Sidebar;
