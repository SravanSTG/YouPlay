import { BiSolidUserRectangle } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdHomeFilled, MdOutlineFeedback, MdSmartDisplay, MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Sidebar = () => {
  const isSidebarOpen = useSelector((store: RootState) => store.sidebar.isMenuOpen);

  if (!isSidebarOpen) return null;

  return (
    <div className="col-span-1 px-7">
      <div className="flex flex-col justify-start border-b-[1px] border-gray-300 pb-2">
        <p className="flex items-center py-2"><MdHomeFilled className="text-xl mr-2" /> Home</p>
        <p className="flex items-center py-2"><SiYoutubeshorts className="text-xl mr-2" /> Shorts</p>
        <p className="flex items-center py-2"><MdSubscriptions className="text-xl mr-2" /> Subscriptions</p>
      </div>

      <div className="flex flex-col justify-start border-b-[1px] border-gray-300 py-2">
        <h3 className="font-bold">You</h3>
        <p className="flex items-center py-2"><BiSolidUserRectangle className="text-xl mr-2" /> Your channel</p>
        <p className="flex items-center py-2"><FaHistory className="text-xl mr-2" /> History</p>
        <p className="flex items-center py-2"><MdSmartDisplay className="text-xl mr-2" /> Your videos</p>
        <p className="flex items-center py-2"><GoClockFill className="text-xl mr-2" /> Watch later</p>
      </div>

      <div className="flex flex-col justify-start border-b-[1px] border-gray-300 py-2">
        <p className="flex items-center py-2"><IoSettingsOutline className="text-xl mr-2" /> Settings</p>
        <p className="flex items-center py-2"><IoIosHelpCircleOutline className="text-xl mr-2" /> Help</p>
        <p className="flex items-center py-2"><MdOutlineFeedback className="text-xl mr-2" /> Feedback</p>
      </div>
    </div>
  );
};

export default Sidebar;
