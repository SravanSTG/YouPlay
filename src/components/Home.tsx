import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Home = () => {
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Home;
