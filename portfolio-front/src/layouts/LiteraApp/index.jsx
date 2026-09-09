import { Outlet } from "react-router";
import SideBar from "../../components/common/SideBar";

const LiteraApp = () => {
  return (
    <div className="d-flex">
      <SideBar />
      <main className="flex-grow-1">
        <Outlet />
      </main>
    </div>
  );
};

export default LiteraApp;
