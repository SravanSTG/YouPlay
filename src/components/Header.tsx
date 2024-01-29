import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { toggleSidebarMenu } from "../redux/sidebarSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(toggleSidebarMenu());
  }

  return (
    <nav className="flex items-center justify-between px-4 md:px-7 py-4">
      <div className="flex items-center">
        <RxHamburgerMenu className="h-5 w-5 md:h-6 md:w-6" onClick={toggleMenu} />
        <img
          src="./logo.png"
          alt="logo"
          className="h-5 w-5 md:h-7 md:w-7 ml-3 md:ml-6 mr-1"
        />
        <h1 className="font-bold text-lg md:text-2xl">YouPlay</h1>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="border-solid border-gray-300 border-2 px-3 h-7 md:h-[36px] w-32 md:w-80 rounded-l-full text-xs md:text-base"
        />
        <button className="px-2 md:px-5 h-7 md:h-[36px] bg-gray-200 rounded-r-full">
          <IoSearch />
        </button>
      </div>
      <div>
        <FaUserCircle className="text-2xl md:text-3xl"/>
      </div>
    </nav>
  );
};

export default Header;
