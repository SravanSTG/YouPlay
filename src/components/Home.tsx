import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <div className="grid grid-flow-col">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Home;
