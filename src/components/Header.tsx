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
    <nav className="flex items-center justify-between px-7 py-4">
      <div className="flex items-center">
        <RxHamburgerMenu className="h-6 w-6" onClick={toggleMenu} />
        <img
          src="./logo.png"
          alt="logo"
          className="h-7 w-7 ml-6 mr-1"
        />
        <h1 className="font-bold text-2xl">YouPlay</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="border-solid border-gray-300 border-2 px-3 h-[36px] w-80 rounded-l-full"
        />
        <button className="px-5 mt-[-1px] h-[36px] bg-gray-200 rounded-r-full">
          <IoSearch />
        </button>
      </div>
      <div>
        <FaUserCircle className="text-3xl"/>
      </div>
    </nav>
  );
};

export default Header;
