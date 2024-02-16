import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <>
      <Header />
      <div className="grid grid-flow-col">
        <Sidebar />
        <Outlet />
      </div>
      <ToastContainer
        position="bottom-left"
        theme="dark"
        hideProgressBar={true}
        pauseOnHover={false}
        closeButton={false}
      />
    </>
  );
};

export default Home;
